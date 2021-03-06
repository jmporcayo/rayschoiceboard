var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema ({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

});

var User = mongoose.model("User", UserSchema);

module.exports = User;




