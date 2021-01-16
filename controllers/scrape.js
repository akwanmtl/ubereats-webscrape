const puppeteer = require('puppeteer');

const scrape = async (scrapeObj) =>{

    const chromeOptions = {
        headless: true,
        defaultViewport: null,
        args: [
            "--incognito",
            "--no-sandbox",
            "--single-process",
            "--no-zygote"
        ],
    };


    const browser = await puppeteer.launch(chromeOptions);
    const page = await browser.newPage();
    await page.goto('https://www.ubereats.com/ca');
   
    await page.waitFor('input[name=searchTerm]');

    await page.focus('[name="searchTerm"]');

    await page.keyboard.type(scrapeObj.address, {delay: 500});

    await page.keyboard.press('Enter');


    for(let i = 0; i < 1; i++){
        await showMore(page);
    }
    
    await page.waitForXPath("//button[contains(text(), 'Show more')]")

    // Scrape
    const xpath_links = "//div[contains(text(), 'Buy 1, Get 1 Free')]/following-sibling::a";
    const xpath_titles = "//div[contains(text(), 'Buy 1, Get 1 Free')]/following-sibling::a/child::h3";
    const links = await page.$x(xpath_links);
    const link_urls = await page.evaluate((...links) => {
    return links.map(e => e.href);
    }, ...links);

    const titles = await page.$x(xpath_titles);
    const titles_restaurants = await page.evaluate((...titles) => {
    return titles.map(e => e.innerText);
    }, ...titles);

    console.log(link_urls.length);
    console.log(titles_restaurants.length);    

    let restaurants = [];
    let names = [];

    for (let i = 0; i < titles_restaurants.length; i++){
        let restaurant = {
            name: titles_restaurants[i],
            url: link_urls[i]
        }
        if(names.indexOf(titles_restaurants[i]) == -1) {
            restaurants.push(restaurant);
            names.push(titles_restaurants[i]);
        }
        
    }
    browser.close();
    
    return restaurants;
    
}

const showMore = async (page) =>{
    await page.waitForXPath("//button[contains(text(), 'Show more')]")
    const button = await page.$x("//button[contains(text(), 'Show more')]");
    if (button.length > 0) {
        console.log('hello')
        await button[0].click();
    } 
    else {
        throw new Error("Link not found");
    }
}

module.exports = scrape;

