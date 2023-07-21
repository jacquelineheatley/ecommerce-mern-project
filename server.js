import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

// Config .env
dotenv.config();

// Database config
connectDB();

// Rest Object
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Rest API
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to our MERN STACK E-Commerce App",
  });
});

// Port
const PORT = process.env.PORT || 8080;

// App Listen
app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});