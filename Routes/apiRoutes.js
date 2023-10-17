const express = require("express");
const router = express.Router();
const fs = require("fs");
//const path = require("path");
// require in your db.json file (/db/db.json)
const noteEntries = require("../db/db.json");

function newId() {
  return Math.random();
}

router.get("/notes", (req, res) => {
  //provides path
  //const dirPath = "/Users/crislyn/bootcamp/Create-Notes/db/db.json";
  // Saves new notes on the request body
  const apiNotes = JSON.parse(fs.readFileSync(noteEntries, "utf8"));
  res.json(apiNotes);
});

router.post("/notes", (req, res) => {
  const allNotes = req.body;
 // const dirPath = "/Users/crislyn/bootcamp/Create-Notes/db/db.json";

  //Will parse through the json data
  const myNotes = JSON.parse(fs.readFileSync(noteEntries, "utf8")); //do in get then read it
  console.log(allNotes);

  //Assigns each note an Id
  allNotes.id = myNotes.length.toString();
  console.log("random id assigned");

  //adds to json data
  myNotes.push(allNotes);
  //writes to file
  fs.writeFileSync(noteEntries, JSON.stringify(myNotes));
  res.json(myNotes);
});

router.delete("/notes/:id", (req, res) => {
  // Will target id
  const id = req.params.id;
  //const dirPath = "/Users/crislyn/bootcamp/Create-Notes/db/db.json";

  //Will parse through the json data
  const myNotes = JSON.parse(fs.readFileSync(noteEntries, "utf8"));

  //filters notes by their id
  updateNotes = myNotes.filter((note) => note.id !== id);
  //writes to file
  fs.writeFileSync(noteEntries, JSON.stringify(updateNotes));
  //shows new array
  res.json(updateNotes);
  console.log("note deleted");
});

module.exports = router;
