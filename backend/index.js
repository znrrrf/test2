const express = require("express");
const dotenv = require("dotenv");
const app = express();
const db = require("./models");

dotenv.config();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send({
        message: "this is my api"
    });
});

const { authRouters, userRouters, productRouters } = require("./routers");
app.use("/auth", authRouters);
app.use("/user", userRouters);
app.use("/product", productRouters);


app.listen(process.env.PORT, () => {
    // db.sequelize.sync({ alter : true });
    console.log(`server is running on port: ${process.env.PORT}...`);
});