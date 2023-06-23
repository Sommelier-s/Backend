const deleteWineCategory = require('../controllers/categoryWine/deleteWineCategory.controller')
const getWineCategories = require('../controllers/categoryWine/getWineCategories.controller')
const postWineCategories = require('../controllers/categoryWine/postWineCategory.controller')


const deleteLiquorCategory = require('../controllers/categoryLiquor/deleteLiquorCategory.controller')
const getLiquorCategories = require('../controllers/categoryLiquor/getLiquorCategories.controller')
const postLiquorCategories = require('../controllers/categoryLiquor/postLiquorCategory.controller')

const postPurchasedProducts = require('../controllers/PurchasedProducts/postPurchasedProduct.controller.js')
const getPurchasedProductsById = require('../controllers/PurchasedProducts/getByIdPurchasedByUser.controller.js')


module.exports = {
    deleteWineCategory,
    getWineCategories,
    postWineCategories,
    deleteLiquorCategory,
    getLiquorCategories,
    postLiquorCategories,
    postPurchasedProducts,
    getPurchasedProductsById
}