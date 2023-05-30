import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // insert
    // await Unicorns.insertMany(unicornData);
    // Create a unique index for the "name" key in the "unicorns" collection
    // your code
    // your code
    // Check if the index was successfully created
    // your code
    // your code
    // res.send({ isIndexCreated });
  } catch (error) {
    res.status(500).send("An error occurred.");
  }
});

export default router;
