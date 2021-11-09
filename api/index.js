const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
app.use(morgan("tiny"));

mongoose
  .connect(process.env.MONGO_URL || "mongodb://localhost/ecommerce2")
  .then(() => console.log("DB collection successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/user"));
app.use("/api/products", require("./routes/product"));
app.use("/api/carts", require("./routes/cart"));
app.use("/api/orders", require("./routes/order"));
app.use("/api/checkout", require("./routes/stripe"));

app.listen(process.env.PORT, () => {
  console.log("Server is running...");
});
