const app = require("express")();
const bot = require("./bot");

app.get("/", async (req, res) => {
  res.redirect("/api");
});

app.get("/api", async (req, res) => {
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  const response = await bot();
  res.end(response);
});

module.exports = app;
