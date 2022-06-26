const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;
const server = process.env.server || "GateWay"

app.get("/", (req, res, next) => {
  console.log('This Request redirect to the server');
  res.send(`This Request redirect to the server ${server}`);
});

app.listen(PORT, () => {
  console.log(`Server Running at port:${PORT}`)
});
