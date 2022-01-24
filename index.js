const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
  res.send("hellow from Server");
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
