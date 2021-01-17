const electron = require('electron');
// const pie = require("puppeteer-in-electron")
// const puppeteer = require("puppeteer-core");

const submitBtn = document.getElementById("address");


submitBtn.addEventListener("submit", (e) =>{
    e.preventDefault();

    const addressText = document.getElementById("address-text").value;
    const postObj = {
        address: addressText
    }
    document.getElementById('main').setAttribute('class','hide');
    document.getElementById('load').removeAttribute('class');
    
    // scrape(postObj).then(response=>{
    //     console.log(response);
    //     document.getElementById('restaurant').removeAttribute('class');
    // })
        
});

// const scrape = async (scrapeObj) =>{

//     const browser = await pie.connect(app, puppeteer);
//     const window = new BrowserWindow({
//         width: 800,
//         height: 600
//       });
//     const url = "about:blank";
//     await window.loadURL(url);

//     alert('here I am')
//     const page = await pie.getPage(browser, window);
//     await page.goto('https://www.ubereats.com/ca');
   
//     await page.waitFor('input[name=searchTerm]');

//     await page.focus('[name="searchTerm"]');

//     await page.keyboard.type(scrapeObj.address, {delay: 500});

//     await page.keyboard.press('Enter');


//     for(let i = 0; i < 6; i++){
//         await showMore(page);
//     }
    
//     await page.waitForXPath("//button[contains(text(), 'Show more')]")

//     // Scrape
//     const xpath_links = "//div[contains(text(), 'Buy 1, Get 1 Free')]/following-sibling::a";
//     const xpath_titles = "//div[contains(text(), 'Buy 1, Get 1 Free')]/following-sibling::a/child::h3";
//     const links = await page.$x(xpath_links);
//     const link_urls = await page.evaluate((...links) => {
//     return links.map(e => e.href);
//     }, ...links);

//     const titles = await page.$x(xpath_titles);
//     const titles_restaurants = await page.evaluate((...titles) => {
//     return titles.map(e => e.innerText);
//     }, ...titles);

//     console.log(link_urls.length);
//     console.log(titles_restaurants.length);    

//     let restaurants = [];
//     let names = [];

//     for (let i = 0; i < titles_restaurants.length; i++){
//         let restaurant = {
//             name: titles_restaurants[i],
//             url: link_urls[i]
//         }
//         if(names.indexOf(titles_restaurants[i]) == -1) {
//             restaurants.push(restaurant);
//             names.push(titles_restaurants[i]);
//         }
        
//     }
//     window.close();
    
//     return restaurants;
    
// }

// const showMore = async (page) =>{
//     await page.waitForXPath("//button[contains(text(), 'Show more')]")
//     const button = await page.$x("//button[contains(text(), 'Show more')]");
//     if (button.length > 0) {
//         console.log('hello')
//         await button[0].click();
//     } 
//     else {
//         throw new Error("Link not found");
//     }
// }