const router = require("express").Router();
const barberRoutes = require("./barber-routes");

router.use("/barbers", barberRoutes);

module.exports = router;