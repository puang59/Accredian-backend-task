import express from "express";
import { selectAll } from "../helper/database";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await selectAll();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

export default router;
