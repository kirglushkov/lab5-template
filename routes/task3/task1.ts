import express from "express";
import { Unicorns } from "../../schema/unicorns";

import { habitatsData } from "../../data/habitats";
const router = express.Router();
// Task 8.1.2: MongoDB queries
router.get("/", async (req, res) => {
  try {
    // Insert the provided documents into the "towns" collection
    // your code
    // your code
    const unicorns = await Unicorns.find();
    res.json(unicorns);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
