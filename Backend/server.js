import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRouter from "./api/users.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const url = process.env.M_DB;
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established ✅");
});

app.use("/user", usersRouter);
app.use("/*", (req, res) => {
  res.status(404).json({
    mesage: "This url doesn't exist",
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log("Server is listinering on port http://localhost:4000 ✅")
);
