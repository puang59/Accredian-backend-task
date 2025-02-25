import express from "express";
import { storeData } from "../helper/database";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = await storeData(req.body);
    res.status(201).json(data);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: "Error storing data" });
  }
});

export default router;
