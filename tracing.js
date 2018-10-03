const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    await page.tracing.start({path: 'outputs/trace.json'});
    await page.goto('https://oodle-demo.firebaseapp.com/#/browse');
    await page.tracing.stop();
})()

