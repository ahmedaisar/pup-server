const bot = require("./bot");
const app = require("express")();

app.get("/api", async (req, res) => {
  const response = await bot();
  res.send(response);
});

module.exports = app;
