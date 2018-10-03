const puppeteer = require('puppeteer');
const executablePath = '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome';
(async () => {
    const browser = await puppeteer.launch({
        executablePath,
        headless: false
    });
    const page = await browser.newPage()
    await page.goto('https://web.whatsapp.com/')
    await page.waitFor(10000); // login to the whatsapp web in this duration :)
    await page.click('#pane-side > div > div > div > div:nth-child(16)');
    await page.focus('#main > footer > div._3pkkz.copyable-area > div._1Plpp > div > div._2S1VP.copyable-text.selectable-text');
    await page.keyboard.type('i am typing using puppeteer !!');
    await page.click('#main > footer > div._3pkkz.copyable-area > div:nth-child(3) > button')
    await page.screenshot({
        path: 'outputs/whatsapp.png'
    })
})()