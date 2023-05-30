import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Delete documents with mayors who don't belong to any party
    // your code

    // Check the contents of the collection

    // console.log("Contents of the towns collection:", towns);

    // Clear the collection
    // your code

    res.send("Tasks completed successfully.");
  } catch (error) {
    console.error("Error executing tasks:", error);
    res.status(500).send("An error occurred while executing the tasks.");
  }
});

export default router;
