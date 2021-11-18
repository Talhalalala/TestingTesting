const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const http = require("http");
const port = 3002;
app.use(cors());

app.use(express.static(__dirname + 'googleHome'));

const results = [
    {
      id: 1,
      name: "900+ The Most Amazing Food Ever ideas in 2021",
      link: "https://www.pinterest.co.uk/spendpennies/the-most-amazing-food-ever/",
    },
    {
      id: 2,
      name: "Amazing cakes Irish wedding cakes based in Dublin Ireland ",
      link: "http://amazingcakes.ie",
    },
    {
      id: 3,
      name: "Top 10 Traditional British Foods",
      link: 'https://www.delish.com/cooking/menus/g1478/quick-dinner-ideas/"',
    },
    {
      id: 4,
      name: "68 Amazingly Quick Dinners For Busy Weeknights - Delish",
      link: 'https://www.delish.com/cooking/menus/g1478/quick-dinner-ideas/"',
    },
    {
      id: 5,
      name: "Fun Facts about Food | EatFirst Blog",
      link: "https://www.eatfirst.com/en-au/c/blog/fun-facts-about-food",
    },
    {
      id: 6,
      name: "Impressive recipes for a special occasion - Delicious ",
      link: "https://www.amazingfoodmadeeasy.com",
    },
    {
      id: 7,
      name: "Amazing Food Made Easy",
      link: "https://www.amazingfoodmadeeasy.com",
    },
    {
      id: 8,
      name: "World's most delicious dishes you'll want to try | lovefood.com",
      link: "https://www.lovefood.com/gallerylist/81561/the-worlds-most-delicious-dishes-youll-want-to-try",
    },
    {
      id: 9,
      name: "The hottest foodie destinations in Europe right now - CN",
      link: "https://www.cntraveller.com/gallery/best-food-in-europe",
    },
    {
      id: 10,
      name: "World's most delicious dishes you'll want to try | lovefood.com",
      link: "https://www.lovefood.com/gallerylist/81561/the-worlds-most-delicious-dishes-youll-want-to-try",
    },
  ];
  ​







// app.get('/', (req, res) => res.send('Hello World!'))

app.get("/results", (req, res) => res.send(results));
​
​
app.post("/", (req, res) => {
  res.status(405).send("not allowed");
});
​
module.exports = app;







app.listen(port, () => console.log(`Express departing now from http://localhost:${port}`));