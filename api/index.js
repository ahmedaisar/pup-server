require("puppeteer-extra-plugin-stealth");
require("puppeteer-extra-plugin-stealth");

const bot = require("../lib/bot");
const app = require("express")();

app.get("/api", async (req, res) => {
  const response = await bot();
  res.send(response);
  console.log(response);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Listening on port ${PORT}..");
});

module.exports = app;
