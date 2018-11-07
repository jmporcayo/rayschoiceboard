var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CardsSchema = new Schema ({
    card: String
});

var Cards = mongoose.model("Cards", CardsSchema);

module.exports = Cards;