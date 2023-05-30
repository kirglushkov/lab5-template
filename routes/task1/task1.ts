import express from "express";
import { UnicornsData } from "../../data/unicorns";
import { Unicorns } from "../../schema/unicorns";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    await Unicorns.insertMany(UnicornsData);
    res.send("Cделано");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
