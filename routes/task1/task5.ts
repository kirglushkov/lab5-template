import express from "express";
const router = express.Router();
import { Unicorns } from "../../schema/unicorns";

router.get("/", async (req, res) => {
  try {
    // Query to retrieve the list of unicorns with the first favorite preference name (excluding the _id field)
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
