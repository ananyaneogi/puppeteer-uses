const puppeteer = require('puppeteer');
puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await Promise.all([
        page.coverage.startJSCoverage(),
        page.coverage.startCSSCoverage()
    ]);
    await page.goto('https://oodle-demo.firebaseapp.com/#/browse');
    const [jsCoverage, cssCoverage] = await Promise.all([
        page.coverage.stopJSCoverage(),
        page.coverage.stopCSSCoverage(),
    ]);
    let totalBytes = 0;
    let usedBytes = 0;
    const coverage = [...jsCoverage, ...cssCoverage];
    for (const entry of coverage) {
        totalBytes += entry.text.length;
        for (const range of entry.ranges)
            usedBytes += range.end - range.start - 1;
    }
    const usedCode = ((usedBytes / totalBytes) * 100).toFixed(2);
    console.log('Code used:', usedCode, '%');
    await browser.close();
});