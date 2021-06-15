const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false, defaultViewport: null});
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/');
    await page.screenshot({path: 'screen.png'});
    await page.waitForSelector('#inputTitle');
    await page.type('#inputTitle', 'Testowy tytuł notatki');
    await page.type('#inputText', 'Notatka testowa');
    await page.click('#submitButton');
    await page.waitFor(2000);
    await page.screenshot({path: 'addedNote.png', fullPage: true})
    await browser.close();
})();