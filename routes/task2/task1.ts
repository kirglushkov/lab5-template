import express from "express";
import { TownsData } from "../../data/towns";
const router = express.Router();

// Task 8.1.2: MongoDB queries
router.get("/", async (req, res) => {
  try {
    // Insert the provided documents into the "towns" collection

    res.json({
      // towns,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
