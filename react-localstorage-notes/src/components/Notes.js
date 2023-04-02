import Note from "./Note";
import CreateNote from "./CreateNote";
import "../css/Note.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const deleteNote = (id) => {
    //pass id to delete
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    console.log(notes); //check saved note
    //saving data to local storage
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);
  //dependency [notes] means that when notes have any updates, will console log the new notes.

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    console.log("data", data);
    if (data.length > 0) {
      setNotes(data);
    }
  }, []);

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          text={note.text}
          id={note.id}
          deleteNote={deleteNote}
        />
      ))}

      <CreateNote
        textHandler={textHandler}
        inputText={inputText}
        saveHandler={saveHandler}
      />
    </div>
  );
}

export default Notes;
