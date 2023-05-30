import express from "express";
const router = express.Router();
import { Unicorns } from "../../schema/unicorns";

router.get("/", async (req, res) => {
  try {
    // Update the love of the male unicorn "Pilot"
    const updateResult = await Unicorns.findOneAndUpdate(
    );

    // Check the contents of the "unicorns" collection
    const unicorns = await Unicorns.find();
    res.send(unicorns);
  } catch (error) {
    res.status(500).send("An error occurred.");
  }
});

export default router;
