const express = require('express');
const app = express();
const db = require('./models/index');
const bodyParser = require('body-parser');

app.listen(4568, () => console.log('servidor rodando'));

app.use(bodyParser.json())
app.use("/users", require("./routes/users"));
app.use("/users/:user_id", require("./routes/users"));
app.use("/orders", require("./routes/orders"));
app.use("/orders/:order_id", require("./routes/orders"));
app.use("/products", require("./routes/products"));
app.use("/products/:order_id", require("./routes/products"));

db.sequelize.sync();

// app.get("/", (req, resp) => {
//     resp.send("L");
// });

