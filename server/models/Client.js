const { Schema } = require("mongoose");

const clientSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false
        },
        phone: {
            type: Number,
            required: false
        }
    }
);

module.exports = clientSchema;