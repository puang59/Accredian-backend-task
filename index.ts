import express from "express";
import cors from "cors";

import selectAll from "./routes/selectAll";
import storeData from "./routes/storeData";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("helo accredian :)");
});

app.use("/selectAll", selectAll);
app.use("/storeData", storeData);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
