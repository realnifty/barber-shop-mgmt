const router = require("express").Router();

const {
  createBarber,
  getSingleBarber,
  saveClient,
  deleteClient,
  login,
} = require("../../controllers/barber-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
router.route("/").post(createBarber).put(authMiddleware, saveClient);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getSingleBarber);

router.route("/clients/clientId").delete(authMiddleware, deleteClient);

module.exports = router;