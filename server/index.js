import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { corsOptions } from "./config/config.js";
import chatRouter from "./routers/chatRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use("/", chatRouter);

app.listen(8080, () => {
  console.log("Server is running");
})