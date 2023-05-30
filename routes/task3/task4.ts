import express from "express";
const router = express.Router();

// Task 8.1.2: MongoDB queries
router.get("/", async (req, res) => {
  try {
    // Query the last four documents


    // Create an index on the "value" key
    

    // Get information about all indexes

    // Query the last four documents with the index


    // Compare execution times
    // const comparisonResult =
    //   executionTimeWithoutIndex < executionTimeWithIndex
    //     ? "Without Index is more efficient"
    //     : "With Index is more efficient";

    // res.send(`Comparison Result: ${comparisonResult}`);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred.");
  }
});

const measureExecutionTime = async <T>(
  query: Promise<T>,
  label: string
): Promise<number> => {
  const start = new Date();
  await query;
  const end = new Date();
  const executionTime = end.getTime() - start.getTime();
  console.log(`${label}: ${executionTime}ms`);
  return executionTime;
};

export default router;
