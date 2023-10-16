const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const noteEntries = require('../db/db.json');
// include/require in your db.json file (/db/db.json)
//const noteEntries = require('../db/db.json');

router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.get('/notes', (req, res) => {
    //should read json file and return all saved notes
    // res.json({ //sends json response
    //     title:"Test Title",
    //     text:"Test text"
    // });
    res.sendFile(path.join(__dirname,'../public/notes.html'));
    // will need to replace with a fs.readFile() later to get the latest notes
    // when this route is requested
   
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });
module.exports = router;