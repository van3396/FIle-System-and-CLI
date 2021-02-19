//packages
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

//files
const { getNotes, addNote, removeNote, listNotes } = require("./notes");
const { argv } = require("yargs");

//customize yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "describe the title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "removing the note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "list of notes",
  handler() {
    listNotes()
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler(argv) {
    console.log("read a note");
  },
});


yargs.argv;
