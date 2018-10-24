const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3011;

const publicPath = path.join(__dirname + '/../public');
app.use(express.static(publicPath)); 

app.listen(PORT,( ) => {
    console.log(`Listining is Port ${PORT}`);
})

console.log(publicPath);