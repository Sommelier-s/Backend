const deleteWineCategory = require('../controllers/categoryWine/deleteWineCategory.controller')
const getWineCategories = require('../controllers/categoryWine/getWineCategories.controller')
const postWineCategories = require('../controllers/categoryWine/postWineCategory.controller')


const deleteLiquorCategory = require('../controllers/categoryLiquor/deleteLiquorCategory.controller')
const getLiquorCategories = require('../controllers/categoryLiquor/getLiquorCategories.controller')
const postLiquorCategories = require('../controllers/categoryLiquor/postLiquorCategory.controller')



module.exports = {
    deleteWineCategory,
    getWineCategories,
    postWineCategories,
    deleteLiquorCategory,
    getLiquorCategories,
    postLiquorCategories
}