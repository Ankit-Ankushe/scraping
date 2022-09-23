const puppeteer = require('puppeteer');
var resList
(async () => {
  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  await page.goto('https://food.grab.com/sg/en/restaurants');
  await page.screenshot({path: 'food.png'});

  const result = await page.evaluate(() => {
    let listFromWeb = document.querySelectorAll(".name___2epcT") 
    const list = [...listFromWeb]
    resList = list
    return list.map(e => e.innerText)
  })
  resList = result;
  console.log(result);
  console.log("res list",resList);
  
  await browser.close();
})();

module.exports = {resList};

