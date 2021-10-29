import React, { useContext, useEffect, useRef, useState } from "react";
import { NoteCard } from "./NoteCard";
import NoteContext from "../Context/notes/NoteContext";
import { useHistory } from "react-router-dom";

export const Notes = () => {
  let history = useHistory();
  const context = useContext(NoteContext);
  const { Note, fetchusernotes, editnote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchusernotes();
    } else {
      history.push("/Login");
    }

    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refclose = useRef(null);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etags: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etags: currentNote.tags,
    });
  };

  const handleonclick = (e) => {
    refclose.current.click();
    console.log("Updating the notes", note);
    editnote(note.id, note.etitle, note.edescription, note.etags);
  };

  const handleonchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {" "}
              <form className="row g-3 px-5">
                <div className="col-md-6">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    value={note.etitle}
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    onChange={handleonchange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="etags" className="form-label">
                    Tag
                  </label>
                  <input
                    value={note.etags}
                    type="text"
                    className="form-control"
                    id="etags"
                    name="etagsf"
                    onChange={handleonchange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    value={note.edescription}
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={handleonchange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refclose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleonclick}
                type="button"
                className="btn btn-primary"
              >
                Update changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Note.length === 0 ? (
          <div className="text-light fs-2 text-center d-inline">
            No notes to display
          </div>
        ) : (
          Note.map((note) => {
            return (
              <NoteCard key={note._id} iNote={note} updateNote={updateNote} />
            );
          })
        )}
      </div>
    </>
  );
};
