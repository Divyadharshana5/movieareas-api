import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello Students!" });
});

app.listen(5000, () => {
  console.log(`The server is running at http://localhost:${5000}`);
});
