import express from "express";
const router = express.Router();
import { Unicorns } from "../../schema/unicorns";

router.get("/", async (req, res) => {
  try {
    // Update all male unicorn documents
    const updateResult = await Unicorns.updateMany(
    );

    // Check the contents of the "unicorns" collection
    const unicorns = await Unicorns.find();
    res.json(unicorns);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
});

export default router;
