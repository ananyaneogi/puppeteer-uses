const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    await page.goto('https://oodle-demo.firebaseapp.com/#/browse');
    await page.waitFor(1000);
    await page.setOfflineMode(true);
})()

