const models = require('../models');
const Orders = models.Orders;
const OrdersAndProducts = models.OrdersAndProducts;
const Products = models.Products;
const Users = models.Users;

const getOrders = (req, res) => Orders.findAll({
    include: [{ model: OrdersAndProducts, include: [Products] }, Users]
})
.then(orders => res.send(orders)
);

const getOrdersById = (req, res) => Orders.findByPk(req.params.order_id, { include: [{ model: OrdersAndProducts, include: [Products] }, Users] })
.then(order => order ? res.send(order) : res.sendStatus(404)
);

const postOrders = (req, res) => Orders.create(req.body, {include: [OrdersAndProducts]})
.then(order => res.status(201).send(order)
);

const putOrders = (req, res) => {Orders.update({...req.body}, {where: {id: req.params.order_id}})
.then(() => {
    Orders
    .findByPk(req.params.order_id)
    .then(order => res.send(order))
});
};

const deleteOrders = (req, res) => {
    OrdersAndProducts.destroy({where: {orderId: req.params.order_id}});
    Orders.destroy({where: {id: req.params.order_id}})
    .then(() => res.sendStatus(200));
};

module.exports = {
    getOrders,
    getOrdersById,
    postOrders,
    putOrders,
    deleteOrders
}