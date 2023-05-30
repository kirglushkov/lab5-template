import express from "express";
const router = express.Router();
import { Unicorns } from "../../schema/unicorns";

router.get("/", async (req, res) => {
  try {
    // const unicorns = ;
    // const results = unicorns.map((unicorn) => ({
    //   name: unicorn.name,
    //   loves: unicorn.loves[0],
    // }));
    // res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
