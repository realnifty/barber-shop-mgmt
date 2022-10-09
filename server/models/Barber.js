const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const clientSchema = require("./Client");

const barberSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address!']
        },
        password: {
            type: String,
            required: true
        },
        clients: [clientSchema]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

barberSchema.pre("save", async function (next) {
    if (this.new || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

barberSchema.virtual("clientCount").get(function () {
    return this.clients.length;
});

const Barber = model("Barber", barberSchema);

module.exports = Barber;