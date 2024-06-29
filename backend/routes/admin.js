const express = require("express");
const router = express.Router();
const { getAllProductsToAdmin,
    deleteSeller,getAllOrders, 
    getApprovedSellersToAdmin,
    getSellersToAdmin,
    approveSeller,rejectSeller,
    deleteProducts,
    warnSeller,
    getCounts,
    getTotalOrdersLastSixMonths,
    getBestSeller,
    searchSellers,
    searchProducts,
    getDeleteSeller,
    getWarnSeller,
    getUsersToAdmin,   
    registerAdmin,
    loginAdmin,
    getMonthlyProductCounts,
    getTotalProductsLastSixMonths,
    getTotalOrdersLastSixWeeks,
   } = require("../controllers/adminController");

// Admin Dashboard
router.route("/admin/count").get(getCounts);
router.route('/order-count-last-six-months').get(getTotalOrdersLastSixMonths);
router.route('/product-count-last-six-months').get(getTotalProductsLastSixMonths);
router.route('/order-count-last-six-weeks').get(getTotalOrdersLastSixWeeks);
// router.get('/order-count-last-six-months', getOrderCountLastSixMonths);
router.route("/admin/bestsellers").get(getBestSeller);

//Admin All Products
router.route("/admin/register").post(registerAdmin);
router.route("/admin/login").post(loginAdmin);
router.route("/admin/products").get(getAllProductsToAdmin);
router.route("/admin/product/:id").delete(deleteProducts);
router.route("/admin/product/search").get(searchProducts);
router.route("/admin/total").get(getMonthlyProductCounts);


// Admin Approved Sellers
router.route("/admin/sellers").get(getApprovedSellersToAdmin);
router.route("/admin/seller/:id").delete(deleteSeller);
router.route("/admin/seller/search").get(searchSellers);


// Admin User
router.route("/admin/users").get(getUsersToAdmin);

// Admin Orders List
router.route("/admin/orders").get(getAllOrders);

// Admin Seller Approval
router.route("/admin/sellerstoapproval").get(getSellersToAdmin);
router.route("/admin/approveSeller/:id").put(approveSeller);
router.route("/admin/rejectSeller/:id").delete(rejectSeller);

// Admin Report Feedback
router.route("/admin/todeleteseller").get(getDeleteSeller);
router.route("/admin/towarnseller").get(getWarnSeller);
router.route("/admin/warnseller").post(warnSeller);



module.exports = router;



// const express = require("express");
// const router = express.Router();
// const {
//   getAllProductsToAdmin,
//   deleteSeller,
//   getAllOrders,
//   getApprovedSellersToAdmin,
//   getSellersToAdmin,
//   approveSeller,
//   rejectSeller,
//   deleteProducts,
//   warnSeller,
//   getCounts,
//   getTotalOrdersLastSixMonths,
//   getBestSeller,
//   searchSellers,
//   searchProducts,
//   getDeleteSeller,
//   getWarnSeller,
//   getUsersToAdmin,
//   registerAdmin,
//   loginAdmin,
//   getMonthlyProductCounts,
//   getTotalProductsLastSixMonths,
// } = require("../controllers/adminController");

// const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/authenticate");

// // Admin Dashboard
// router.route("/admin/count")
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), getCounts);
// router.route('/order-count-last-six-months')
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), getTotalOrdersLastSixMonths);
// router.route('/product-count-last-six-months')
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), getTotalProductsLastSixMonths);
// router.route("/admin/bestsellers")
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), getBestSeller);

// // Admin All Products
// router.route("/admin/register").post(registerAdmin);
// router.route("/admin/login").post(loginAdmin);
// router.route("/admin/products")
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), getAllProductsToAdmin);
// router.route("/admin/product/:id")
//   .delete(isAuthenticatedUser, authorizeRoles('Admin'), deleteProducts);
// router.route("/admin/product/search")
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), searchProducts);
// router.route("/admin/total")
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), getMonthlyProductCounts);

// // Admin Approved Sellers
// router.route("/admin/sellers")
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), getApprovedSellersToAdmin);
// router.route("/admin/seller/:id")
//   .delete(isAuthenticatedUser, authorizeRoles('Admin'), deleteSeller);
// router.route("/admin/seller/search")
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), searchSellers);

// // Admin User
// router.route("/admin/users")
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), getUsersToAdmin);

// // Admin Orders List
// router.route("/admin/orders")
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), getAllOrders);

// // Admin Seller Approval
// router.route("/admin/sellerstoapproval")
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), getSellersToAdmin);
// router.route("/admin/approveSeller/:id")
//   .put(isAuthenticatedUser, authorizeRoles('Admin'), approveSeller);
// router.route("/admin/rejectSeller/:id")
//   .delete(isAuthenticatedUser, authorizeRoles('Admin'), rejectSeller);

// // Admin Report Feedback
// router.route("/admin/todeleteseller")
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), getDeleteSeller);
// router.route("/admin/towarnseller")
//   .get(isAuthenticatedUser, authorizeRoles('Admin'), getWarnSeller);
// router.route("/admin/warnseller")
//   .post(isAuthenticatedUser, authorizeRoles('Admin'), warnSeller);

// module.exports = router;
