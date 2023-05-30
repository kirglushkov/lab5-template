import express from "express";
const router = express.Router();
import { Unicorns } from "../../schema/unicorns";

router.get("/", async (req, res) => {
  try {
    // Create a new unicorn document using the Model
    const barny = new Unicorns({
      name: "Barny",
      loves: ["grape"],
      weight: 340,
      gender: "m",
    });

    // Save the unicorn document to the database


    // Fetch and display the contents of the "unicorns" collection
    const unicorns = await Unicorns.find();

    res.json({
      unicorns,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
});

export default router;
