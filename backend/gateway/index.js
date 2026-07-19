import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Gateway server is running");
});

app.use(
  "/auth",
  proxy(process.env.AUTH_SERVICES)
);


app.listen(process.env.PORT, () => {
  console.log(`Gateway server is running on port ${process.env.PORT}`);
});

