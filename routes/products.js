const router = require('express').Router();
const models = require('../models');
const Products = models.Products;

router.get("/", (req, res) => {
    Products.findAll().then(products => {
        res.send(products);
    })
});

router.get("/:product_id", (req, res) => {
    Products.findByPk(req.params.product_id).then(products => {
        res.send(products);
    })
});

router.post("/", (req, res) => Products.create(req.body)
    .then(product => {
        res.status(201).send(product);
    })
);

router.put("/:product_id", (req, res) => {
    Products.update({ ...req.body }, { where: { id: req.params.product_id } })
        .then(() => {
            Products.findByPk(req.params.product_id)
                .then(product => res.send(product.dataValues))
        });
});

router.delete("/:product_id", (req, res) => {
    Products.destroy({where: { id: req.params.product_id }})
        .then(() => res.sendStatus(200))
});

module.exports = router