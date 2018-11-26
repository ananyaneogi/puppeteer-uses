const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://oodle-demo.firebaseapp.com/#/browse');

    const performanceTiming = JSON.parse(
        await page.evaluate(() => JSON.stringify(window.performance.timing))
    );
    const timings = {};
    Object.keys(performanceTiming).map((key, index) => {
            timings[key] = performanceTiming[key] - performanceTiming.navigationStart;
    });
    console.log('performanceTiming', performanceTiming)
    console.log('difference with navigation start(navigationStart)', timings);

    await browser.close();
})();