const asyncHandler = require("express-async-handler");

const Order = require("../models/orderModel");

// @desc    Create new order

// @route   POST /api/orders

// @access  Private

const addOrderItems = asyncHandler(async (req, res) => {
  try {
    const {
      orders,
      buyer,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orders && orders.length === 0) {
      return res.status(400).send("No order items");
    } else {
      const order = new Order({
        orders,
        buyer,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      const createdOrder = await order.save();

      res.status(201).json(createdOrder);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc    Get order by ID

// @route   GET /api/orders/:id

// @access  Private

const getOrderById = asyncHandler(async (req, res) => {
  try {
    const order = await Order.findById(req.body.id).populate(
      "buyer",
      "name email"
    );

    if (order) {
      res.json({ order, message: "Order found" });
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc    Update order to paid

// @route   GET /api/orders/:id/pay

// @access  Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  try {
    const order = await Order.findById(req.body.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: "processing",
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc    Update order to delivered

// @route   GET /api/orders/:id/deliver

// @access  Private

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  try {
    const order = await Order.findById(req.body.id);

    if (order) {
      order.isDelivered = true;
      order.status = "delivered";
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc    Get logged in user orders

// @route   GET /api/orders/myorders

// @access  Private

const getMyOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.body.id });
    if (orders.length === 0) {
      return res.status(404).send({ message: "You have no Orders" });
    }
    res.json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc    Get all orders

// @route   GET /api/orders

// @access  Private/Admin

const getOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("orders", "name")
      .populate("buyer", "id name");
    if (orders.length === 0) {
      return res.status(404).send({ message: "No orders found" });
    }
    res.json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

module.exports = {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
};
