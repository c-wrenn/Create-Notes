const express = require("express");
const router = express.Router();
const fs = require("fs");
//const path = require("path");
// require in your db.json file (/db/db.json)
const noteEntries = require("../db/db.json");

function newId() {
  return Math.random()
};

router.get("/notes", (req, res) => {
  //provides path
  const dirPath = "/Users/crislyn/bootcamp/Create-Notes/db/db.json";
  // Saves new notes on the request body
  const apiNotes = JSON.parse(fs.readFileSync(dirPath, "utf8"));
  res.json(apiNotes);
});

router.post("/notes", (req, res) => {
  const allNotes = req.body;
  const dirPath = "/Users/crislyn/bootcamp/Create-Notes/db/db.json";

  //Will parse through the json data
  const myNotes = JSON.parse(fs.readFileSync(dirPath, "utf8")); //do in get then read it
  console.log(allNotes);

  //Assigns each note an Id
allNotes.id = myNotes.length.toString();
console.log( "random id assigned")

//adds to json data
  myNotes.push(allNotes);

  fs.writeFileSync(dirPath, JSON.stringify(myNotes));
  res.json(myNotes);
});

router.delete("/notes/:id", (req, res) => {
  // Will read id
  const id = req.params.id; 
  const dirPath = "/Users/crislyn/bootcamp/Create-Notes/db/db.json";

  //Will parse through the json data
  const myNotes = JSON.parse(fs.readFileSync(dirPath, "utf8")); 
 

  updateNotes = myNotes.filter(note => note.id !== id);
  fs.writeFileSync(dirPath, JSON.stringify(updateNotes));
  res.json(updateNotes);
  console.log("note deleted");
});

module.exports = router;
