const express = require("express");
const {
  addToCart,
  getCartProduct,
  deleteProductFromCart,
} = require("../controllers/cartController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/authenticate");

router.route("/addToCart").post(isAuthenticatedUser, addToCart);
router.route("/getCart").get(isAuthenticatedUser, getCartProduct);
router
  .route("/deleteFromCart/:id")
  .delete(isAuthenticatedUser, deleteProductFromCart);

module.exports = router;
