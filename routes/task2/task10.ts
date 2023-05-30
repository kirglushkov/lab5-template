import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Update the unicorn document with name "Portland"
    // const updateResult = await Town.updateOne(
    // );

    // Check the contents of the "towns" collection


    // res.json({
    //   towns,
    // });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
});

export default router;
