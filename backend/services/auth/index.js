import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dns from "dns";


dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Auth Services server is running");
});

app.listen(process.env.PORT, () => {
  console.log(`Auth Services server is running on port ${process.env.PORT}`);
  connectDB();
});

