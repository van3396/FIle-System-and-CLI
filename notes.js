const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("New note added"));
  } else {
    console.log(chalk.bgRed("Note title taken!!"));
  }

  //   console.log("this is notes: ", notes);
};

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);

  if (notes.length > updatedNotes.length) {
    console.log(chalk.bgGreen("Note removed"));
    saveNotes(updatedNotes);
  } else {
    console.log(chalk.bgRed("No notes removed"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    // console.log(dataJSON)
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const listNotes = () => {
  console.log(chalk.bgGreen("your notes"));
  const notes = loadNotes();
  notes.forEach((note) => console.log(chalk.magenta(note.title)));
};

const readNote = (title) => {
  const notes = loadNotes();
  const findTitle = notes.find((note) => note.title === title);

  if (findTitle) {
    console.log(`${chalk.green(findTitle.title)} ${findTitle.body}`);
  } else {
    console.log(chalk.red("Note not found."));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
