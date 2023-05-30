import express from "express";
const router = express.Router();
import { Unicorns } from "../../schema/unicorns";

router.get("/", async (req, res) => {
  try {
    // Query to retrieve the list of unicorns in reverse insertion order
    // const unicorns = 

    res.json({
      // unicorns,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
