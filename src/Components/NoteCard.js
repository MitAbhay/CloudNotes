import React, { useContext } from "react";
import NoteContext from "../Context/notes/NoteContext";

export const NoteCard = (props) => {
  // const { iNote } = props;

  const context = useContext(NoteContext);
  const { deletenote } = context;

  const handleondelete = () => {
    deletenote(props.iNote._id);
  };
  const handleonupdate = () => {
    props.updateNote(props.iNote);
  };
  return (
    <div>
      <div className="card">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <h5 className="card-title">{props.iNote.title}</h5>
                <i onClick={handleonupdate} className="far fa-edit mx-2"></i>
                <i
                  onClick={handleondelete}
                  className="far fa-trash-alt mx-2"
                ></i>
              </div>
              <p className="card-text">{props.iNote.description}</p>
            </div>
            <a href="/home" className="btn btn-primary">
              {" "}
              Open{" "}
            </a>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
