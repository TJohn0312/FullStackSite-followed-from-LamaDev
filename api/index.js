const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe"); //stripe
const cors = require("cors"); //stripe

dotenv.config();

mongoose
  .connect( process.env.MONGO_URL)
  .then(()=>console.log("DB Connection Successfull!"))
  .catch((err)=> { 
    console.log(err);
  });

app.get("/api/test", ()=>{
  console.log("test is Successfull")
})

app.use(cors()); //stripe
app.use(express.json()); //stripe
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, ()=>{
  console.log("Backend server is running! on port")
})
