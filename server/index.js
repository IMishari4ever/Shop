const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const bagRoute = require("./routes/bag");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const wishlistRoute = require("./routes/wishlist");
const cors = require("cors");

dotenv.config({path: './config.env'})

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose
  .connect(DB)
  .then(() => console.log("Successfully connected to the Aylo Database!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/bags", bagRoute);
app.use("/api/orders", orderRoute);
app.use("/api/wishlist", wishlistRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is up and running on port ${process.env.PORT}`);
});
