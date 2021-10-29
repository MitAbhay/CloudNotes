import React, { useContext, useState } from "react";
import NoteContext from "../Context/notes/NoteContext";

export const AddNotes = () => {
  const context = useContext(NoteContext);
  const { addnotes } = context;
  const [note, setNote] = useState({ title: "", description: "", tags: "" });
  const handleonclick = (e) => {
    e.preventDefault();
    addnotes(note.title, note.description, note.tags);
    setNote({ title: "", description: "", tags: "" })
  };

  const handleonchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="text-light mx-auto" style={{width:"70vw"}}>
      <form className="row g-3 px-5">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
          value={note.title}
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleonchange}
            minLength={5}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
          value={note.tags}
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            onChange={handleonchange}
            minLength={5}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          
          <textarea
          value={note.description}
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={handleonchange}
            minLength={5}
            required
          />
        
        </div>
        <button
        style={{width: '30%',marginLeft: "7px"}}
          className="btn btn-primary ml-3"
          type="submit"
          onClick={handleonclick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};
