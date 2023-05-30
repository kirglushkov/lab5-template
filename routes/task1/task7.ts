import express from "express";
const router = express.Router();
import { Unicorns } from "../../schema/unicorns";

router.get("/", async (req, res) => {
  try {
    // Query to retrieve the list of male unicorns weighing at least half a ton and preferring grape and lemon (excluding the _id field)


    res.json({
      // unicorns,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
