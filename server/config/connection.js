const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/barber-shop-mgmt");

module.exports = mongoose.connection;