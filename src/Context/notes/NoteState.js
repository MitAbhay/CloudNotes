import NoteContext from "./NoteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialnotes = [{ }];
  const [Note, setNote] = useState(initialnotes);

  //Fetch User all  notes
  const fetchusernotes = async () => {
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchusernotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken:localStorage.getItem('token')
          ,
      },
    });
    const json = await response.json();
    console.log(json.notes);
    setNote(json.notes);  // Here array is json.notes not only json, so noe it is setting Note as array of notes
  };

  //Add notes
  const addnotes = async (title, description, tags) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken:localStorage.getItem('token')
          ,
      },
      body: JSON.stringify({ title, description, tags }),
    });
    const json = await response.json();
    //Logic for adding the note on client side
    setNote(Note.concat(json));
  };

  //Delete notes
  const deletenote = async (id) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authtoken:localStorage.getItem('token')
          ,
      },
    });
    const json = await response.json();
    console.log(json);
    //Logic for deleting the note on client side

    const newnote = Note.filter((notes) => {
      return notes._id !== id;
    });

    setNote(newnote);
  };

  //Edit notes
  const editnote = async (id, title, description, tags) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authtoken:localStorage.getItem('token')
              ,
      },
      body: JSON.stringify({ title, description, tags }),
    });
    const json = response.json();
    console.log(json);
    //logic for editing the note on client side
    let newnotes = JSON.parse(JSON.stringify(Note));

    for (let index = 0; index < Note.length; index++) {
      const element = newnotes[index];
      if (element._id === id) {
        newnotes[index].title = title;
        newnotes[index].description = description;
        newnotes[index].tags = tags;

        break;
      }
    }
    setNote(newnotes);
  };

  return (
    <NoteContext.Provider
      value={{ Note, setNote, addnotes, deletenote, editnote, fetchusernotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
