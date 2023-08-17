import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./Connection.js";
import propertyRouter from "./router/propertyRouter.js";
import adminRouter from "./router/adminRouter.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/admin", adminRouter);
app.use("/api", propertyRouter);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on ${port}`);
});
