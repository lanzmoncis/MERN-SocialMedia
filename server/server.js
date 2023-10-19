import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDb.js";

import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 9000;

// Middlewares
app.use(express.json({ limit: "50mb" })); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
