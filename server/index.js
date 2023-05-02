import dotenv from "dotenv";
import connectToDatabase from "./database.js";
dotenv.config();
import express from "express";
import path from "path";

// our routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

connectToDatabase();
const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

const port = process.env.PORT || 5000;

const _dirname = path.resolve();
app.use("/uploads", express.static(path.join(_dirname, "/uploads")));

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(_dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"))
  );
}

app.listen(port, () => {
  console.log(`Server runs on port ${port}.`);
});
