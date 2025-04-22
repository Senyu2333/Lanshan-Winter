const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const poemsPath = path.join(__dirname, 'poems.json');
const collectionPath = path.join(__dirname, 'myCollections.json');
const port = 3000;
app.get('/collections', (req, res) => {
    fs.readFile(poemsPath, 'utf8', (err, data) => {
        if(err) console.log(err);
    })
})
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})