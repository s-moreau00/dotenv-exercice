const express = require('express');

const app = express();
require('dotenv').config()


const port=process.env.SERVER_PORT;
let name=process.env.NAME
let city=process.env.CITY
let langage=process.env.LANGAGE

app.get("/", (req, res) => {
    res.send("hello :)");
})

app.listen(port, () => {
    console.log(`I am ${name} from ${city} and i'm learning ${langage} ! :)`)
})