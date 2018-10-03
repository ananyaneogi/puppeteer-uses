const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto('https://oodle-demo.firebaseapp.com/#/browse');
    const res = await page.metrics();
    console.log(res);
})()
