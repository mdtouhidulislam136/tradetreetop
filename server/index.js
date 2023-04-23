import dotenv from "dotenv";
import connectToDatabase from "./database.js";
import express from "express";

// our routes
import productRoutes from "./routes/productRoutes.js";
import userRoute from "./routes/userRoutes.js";

dotenv.config();
connectToDatabase();
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/products", productRoutes);
app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server runs on port ${port}.`);
});
