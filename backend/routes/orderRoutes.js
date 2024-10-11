const express = require("express");

const router = express.Router();

const {
  getOrders,
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
} = require("../controllers/orderController");

router.route("/").get(getOrders).post(addOrderItems);
router.route("/myorders/").get(getMyOrders);
router.route("/order/").get(getOrderById).put(updateOrderToPaid);
router.put("/order/delivered", updateOrderToDelivered);

module.exports = router;
