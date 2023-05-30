import express from "express";
const router = express.Router();

// Task 8.1.2: MongoDB queries
router.get("/", async (req, res) => {
  try {
    // Retrieve information about all indexes

    // console.log("Indexes:", indexes);

    // Remove all indexes except for the index on the identifier (_id)
    

    // Attempt to remove the index on the identifier (_id)
    
    console.log('Index "_id_" removed.');

    res.send("Indexes removed successfully.");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred.");
  }
});

export default router;
