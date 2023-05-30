import express from "express";
const router = express.Router();
import { Unicorns } from "../../schema/unicorns";

router.get("/", async (req, res) => {
  try {
    // Retrieve the list of male unicorns using cursor and sorting
    const cursor = Unicorns.find()
      .sort()
      .limit(2)
      .cursor();

    // Iterate over the cursor using next method
    let unicorn = await cursor.next();
    while (unicorn) {
      console.log(unicorn.name);
      unicorn = await cursor.next();
    }

    res.send("List of male unicorns printed successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
