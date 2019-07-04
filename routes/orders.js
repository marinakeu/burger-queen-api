const router = require('express').Router();
const Orders = require('../controllers/orders');

router.get("/", Orders.getOrders);
router.get("/:order_id", Orders.getOrdersById);
router.get("/", Orders.postOrders);
router.get("/:order_id", Orders.putOrders);
router.get("/:order_id", Orders.deleteOrders);

module.exports = router

// router.get("/", (req, res) => {
//     Orders.findAll().then(orders => {
//         res.send(orders);
//     })
// });

// router.get("/:order_id", (req, res) => {
//     Orders.findByPk(req.params.order_id).then(order => {
//         res.send(order);
//     })
// });

// Orders.findAll().then(users => {
//     const id = Number(req.params.order_id);
//     const user = users.filter(userInArray => userInArray['id'] === id)
//     res.send(user);
// })

//include no sequelize para tentar linkar orders com ordersAndProducts