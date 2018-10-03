const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://oodle-demo.firebaseapp.com/#/browse');
    await page.screenshot({path: 'outputs/oodle.png'});

    browser.close();
}

run();