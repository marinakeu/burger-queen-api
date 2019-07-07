const router = require('express').Router();
const models = require('../models');
const Users = models.Users;

router.get("/", (req, res) => {
    Users.findAll().then(users => {
        res.send(users);
    })
});

router.get("/:user_id", (req, res) => {
    Users.findByPk(req.params.user_id).then(user => {
        res.send(user);
    })
});

router.post("/", (req, res) => Users.create(req.body)
    .then(user => {
        res.status(201).send(user);
    })
);

router.put("/:user_id", (req, res) => {
    Users.update({ ...req.body }, { where: { id: req.params.user_id } })
        .then(() => {
            Users.findByPk(req.params.user_id)
                .then(user => res.send(user.dataValues))
        });
});

router.delete("/:user_id", (req, res) => {
    Users.destroy({where: { id: req.params.user_id }})
        .then(() => res.sendStatus(200))
});

module.exports = router
