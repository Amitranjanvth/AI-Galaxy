import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
import cors from "cors";
import cookieParser from "cookie-parser";
import { protect } from "./middleware/auth.middleware.js";
import { getCurrentUser } from "./controller/user.controller.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Gateway server is running");
});
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))
app.use(cookieParser());
app.use(
  "/auth",
  proxy(process.env.AUTH_SERVICES)
);
app.use("/me",protect, getCurrentUser)


app.listen(process.env.PORT, () => {
  console.log(`Gateway server is running on port ${process.env.PORT}`);
});

