const User = require("./user.model");
const Wine = require("./wine.model");
const Liquor = require("./liquor.model");
const Wine_category = require('./wineCategory.model');
const Liquor_category = require('./liquorCategory.model');


Wine_category.hasMany(Wine);
Wine.belongsTo(Wine_category);
Liquor_category.hasMany(Wine);
Liquor.belongsTo(Liquor_category);


module.exports = {
    User,
    Wine,
    Liquor,
    Wine_category,
    Liquor_category
}

//feature/dev-Gonza (backend/relationships) creada la relaciones