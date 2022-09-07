const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const bot = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto(
    "https://hotelscan.com/combiner?pos=zz&locale=en&checkin=2023-02-03&checkout=2023-02-09&rooms=2&mobile=0&loop=1&country=MV&ef=1&geoid=xmmmamtksdxx&sort=expensive_first&sorting=3&availability=1&deviceNetwork=3g&deviceCpu=20&deviceMemory=8&limit=100&offset=0",
    {
      waitUntil: "networkidle2",
    }
  );
  await page.waitForTimeout(2000);
  let html = await page.evaluate(() => {
    return JSON.parse(document.querySelector("body").innerText);
  });
  await browser.close();
  return html;
};

module.exports = bot;
