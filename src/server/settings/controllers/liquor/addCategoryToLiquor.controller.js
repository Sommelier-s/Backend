const { Liquor_category, Liquor }= require("../../../../database/model/relationships");


const addCategoryToLiquor = async (req, res) => {
    
    const { userId } = req.query
    const { liquorId } = req.params;
    const { categoryId } = req.body;

    try {
        //Valid if the id is correct
        if (id === "") return res.status(400).json({ status: 400, error: "The id field is empty" });
        if (!esUUID(categoryId)) return res.status(409).json({ status: 409, error: "The id field has no UUID structure" });
        if (!esUUID(liquorId)) return res.status(409).json({ status: 409, error: "The product id field has no UUID structure" });
        if (!esUUID(userId)) return res.status(409).json({ status: 409, error: "The user id field has no UUID structure" });
        //Valid if the user exists
        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ status: 404, error: "The user does not exist" });
        //Valid if the user is an administrator
        if (user.isAdmin === false) return res.status(401).json({ status: 401, error: "User is not an administrator" });
        const product = await Liquor.findByPk(liquorId);
        if (!product) res.status(404).json({ status: 404, error: "The product wasn't found" }); 
        const category = await Liquor_category.findByPk(categoryId);
        if (!category) res.status(404).json({ status: 404, error: "The category wasn't found" });
        product.setLiquor_category(category);
        product.save();
        res.status(200).json({status: 200, message: "The catagory has been added successfully", data: product});
    } catch (error) {
        res.status(500).json({status: 500, error: error.message});   
    }   
}
