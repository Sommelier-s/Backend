const User = require("./user.model");
const Wine = require("./wine.model");
const Liquor = require("./liquor.model");
const Wine_category = require('./wineCategory.model');
const Liquor_category = require('./liquorCategory.model');
const Sale = require('./sales.models');
const Liquor_rating = require('./liquorRating.model');
const Wine_rating = require('./wineRating.model');


Wine_category.hasMany(Wine, { foreignKey:"Wine_categoryId"});
Wine.belongsTo(Wine_category, { foreignKey:"Wine_categoryId"});

Liquor_category.hasMany(Liquor, { foreignKey: "Liquor_categoryId" });
Liquor.belongsTo(Liquor_category, { foreignKey: "Liquor_categoryId" });

module.exports = {
    User,
    Wine,
    Liquor,
    Wine_category,
    Liquor_category,
    Sale,
    Wine_rating,
    Liquor_rating
}

