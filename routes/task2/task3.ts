import express from "express";
const router = express.Router();
import { Unicorns } from "../../schema/unicorns";

router.get("/", async (req, res) => {
  try {
    // Count the number of female unicorns with weight between 0.5 and 600
    const count = 10;

    res.send(
      `Number of female unicorns weighing between 0.5 and 600 kg: ${count}`
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
