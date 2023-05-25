const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("helooo thereeee !");
});

app.listen(port, () => {
  console.log(`Server is Up and Running Babyyyyyy on ${port}!`);
});
