import "dotenv/config";
import cors from "cors";
import express from "express";

import http from "node:http";
import { mongooseConnect } from "./utils/mongoConnect";
import {
  task1,
  task2,
  task3,
  task4,
  task5,
  task6,
  task7,
  task8,
  task9,
} from "./routes/task1/index";
import {
  task21,
  task22,
  task23,
  task24,
  task25,
  task26,
  task27,
  task28,
  task29,
  task210,
  task211,
  task212,
  task213,
} from "./routes/task2/index";

import { task31, task32, task33, task34 } from "./routes/task3/index";

const isProduction = process.env.NODE_ENV === "production";
const port = Number(process.env.PORT || 3000);

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const server = http.createServer(app);

/** Rest API */
app.use(express.json({ limit: "50mb", type: "application/json" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/task1", task1);
app.use("/task2", task2);
app.use("/task3", task3);
app.use("/task4", task4);
app.use("/task5", task5);
app.use("/task6", task6);
app.use("/task7", task7);
app.use("/task8", task8);
app.use("/task9", task9);
app.use("/task21", task21);
app.use("/task22", task22);
app.use("/task23", task23);
app.use("/task24", task24);
app.use("/task25", task25);
app.use("/task26", task26);
app.use("/task27", task27);
app.use("/task28", task28);
app.use("/task29", task29);
app.use("/task210", task210);
app.use("/task211", task211);
app.use("/task212", task212);
app.use("/task213", task213);
app.use("/task31", task31);
app.use("/task32", task32);
app.use("/task33", task33);
app.use("/task34", task34);
app.get("/", (req, res) => {
  res.send("V(=^･ω･^=)v")
})

async function start() {
  try {
    await mongooseConnect();
    server.listen(port, () => {
      const url = `http${isProduction ? "s" : ""}://localhost:${port}`;
      const mode = isProduction ? "production" : "development";
      console.log(`[Server] Сервер запущен по адресу ${url} в режиме ${mode}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
start();
