import express from "express";
const router = express.Router();
import { Unicorns } from "../../schema/unicorns";

// Task 8.1.2: MongoDB queries
router.get("/", async (req, res) => {
  try {
    // Query to retrieve a list of male unicorns
    const males = await Unicorns.find({ gender: "m" }).sort({ name: 1 });

    // Query to retrieve a list of female unicorns, limited to the first three
    // const females = await ;

    // Query to find the first female unicorn who loves carrot
    // const carrotLoverFemale = await ;

    // Query to retrieve the ages of unicorns with the name "Tom"
    // const tomUnicorns = await ;

    res.json({
      males,
      // females,
      // carrotLoverFemale,
      // tomUnicorns,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
