const scrape = require("../controllers/scrape.js");
const extendTimeoutMiddleware = require("../controllers/extendedTimeOut.js")
var path = require("path");
const { emitWarning } = require("process");
module.exports = (app) => {

    // let data = [
    //     {
    //       name: 'Real Fruit Bubble Tea (Chartwell Shopping Centre)',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/real-fruit-bubble-tea-chartwell-shopping-centre/N8R4ReIGSjmQX2AdmI-zGw'
    //     },
    //     {
    //       name: 'Sweet Treats by Almadina (Scarborough)',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/sweet-treats-by-almadina-scarborough/zVpRgaV8TiSQPRQUGXlpkg'
    //     },
    //     {
    //       name: 'ALMADINA BISTRO (Scarborough)',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/almadina-bistro-scarborough/DMQZG29eT5awooRRF2TL9Q'
    //     },
    //     {
    //       name: 'Zhe Eatery 浙家小厨',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/zhe-eatery-%E6%B5%99%E5%AE%B6%E5%B0%8F%E5%8E%A8/cTb7I1P_TEOPnI4z49E8lA'
    //     },
    //     {
    //       name: '6ix Pizza (Halal) Scarborough',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/6ix-pizza-halal-scarborough/-q9z3GvxRquFjTXO3Ct31w'
    //     },
    //     {
    //       name: 'Meet Boil Seafood',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/meet-boil-seafood/faOE8mEhQviVe1bjFwgPyw'
    //     },
    //     {
    //       name: 'North Kabab',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/north-kabab/y_Fyu_GYQkKhT1ZPptsY6A'
    //     },
    //     {
    //       name: 'Tatami Sushi',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/tatami-sushi/ydkp7JTQQamWxLEduY_dHQ'
    //     },
    //     {
    //       name: 'New Quality Bakery',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/new-quality-bakery/TX478ZAPRG2iW2I8Ox9L3A'
    //     },
    //     {
    //       name: 'Lunch Box Heaven 屌丝饭堂',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/lunch-box-heaven-%E5%B1%8C%E4%B8%9D%E9%A5%AD%E5%A0%82/VgUI-yNuSFOlRPtIBTreWQ'
    //     },
    //     {
    //       name: 'Rainbow Food 珍珠食軒',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/rainbow-food-%E7%8F%8D%E7%8F%A0%E9%A3%9F%E8%BB%92/6IalsUXZTN-35vjCuoBC-Q'
    //     },
    //     {
    //       name: 'The Old House 老房子',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/the-old-house-%E8%80%81%E6%88%BF%E5%AD%90/gYv50XVDQ2an-1qAvChrgA'
    //     },
    //     {
    //       name: "Church's Chicken (Lawrence & Kennedy)",
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/churchs-chicken-lawrence-%26-kennedy/kEXUaLKRTwOj1utGjbeabA'
    //     },
    //     {
    //       name: 'Aleppo Kebab',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/aleppo-kebab/Mdwda1GrTzGrWjGDV-pQmA'
    //     },
    //     {
    //       name: 'Royaltea (Scarborough)',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/royaltea-scarborough/iO700Xy7QGuBSUAhJqjJRQ'
    //     },
    //     {
    //       name: 'Real Fruit Bubble Tea (Cedarbrae Mall)',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/real-fruit-bubble-tea-cedarbrae-mall/b5TNPGScRoS__8xTAjUiHQ'
    //     },
    //     {
    //       name: 'Kandahar Kabab (Scarborough)',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/kandahar-kabab-scarborough/ORdrOG1VSXmUaUX1-2-stw'
    //     },
    //     {
    //       name: 'Korean Grill House (Scarborough)',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/korean-grill-house-scarborough/DFfWE1JyR9yEOgYzFJT1RA'
    //     },
    //     {
    //       name: 'CoCo Fresh Tea & Juice (Woodside Mall)',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/coco-fresh-tea-%26-juice-woodside-mall/y_L-IpTjQWSFMecHwwXclA'
    //     },
    //     {
    //       name: "Church's Chicken (2510 Eglinton Ave E)",
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/churchs-chicken-2510-eglinton-ave-e/MwiwRMVBTJy54g6Y1yj7iQ'
    //     },
    //     {
    //       name: 'Gong Cha Midland (Scarborough)',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/gong-cha-midland-scarborough/dL55MttPS3CEEhyY0eOQxQ'
    //     },
    //     {
    //       name: 'Jatujak (Victoria Park)',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/jatujak-victoria-park/mnfhC-TcS4eIJLrL8Mzb6Q'
    //     },
    //     {
    //       name: 'Mr. Congee Chinese Cuisine 龍粥記 (Scarborough)',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/mr-congee-chinese-cuisine-%E9%BE%8D%E7%B2%A5%E8%A8%98-scarborough/H5ZwrVDuQeihtW7Fd-mZ0g'        
    //     },
    //     {
    //       name: 'Magic Noodle (Scarborough) 大槐树',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/magic-noodle-scarborough-%E5%A4%A7%E6%A7%90%E6%A0%91/xnqn3WGbQhCeb_oZKFqKNQ'
    //     },
    //     {
    //       name: 'Jatujak (Scarborough)',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/jatujak-scarborough/Coc39s7FS8CGCADmbwWPnA'
    //     },
    //     {
    //       name: 'Robo Sushi',
    //       url: 'https://www.ubereats.com/ca/toronto/food-delivery/robo-sushi/XKqo2gTQQzWV_AVZCH2ZEw'
    //     }
    //   ]
    
    // app.use(extendTimeoutMiddleware);

    app.post("/api/scrape",extendTimeoutMiddleware, (req,res)=>{
      scrape(req.body).then(data =>{
        console.log('found')
        console.log(data)
        res.write(JSON.stringify(data));
        res.end();
      })
    })

    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    app.get("/restaurants", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/restaurants.html"))
    });
};