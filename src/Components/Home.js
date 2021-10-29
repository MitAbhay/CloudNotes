import React from "react";
import { AddNotes } from "./AddNotes";
import { Notes } from "./Notes";

export const Home = () => {
  return (
    <>
      <h2 className="text-light text-center my-4">YOUR CLOUD NOTEBOOK IS HERE</h2>
      <AddNotes/>
      <div className="container my-4 mx-auto" style={{width :"65vw"}}>
        <h3 className="text-light text-center">YOUR NOTES</h3>
        <Notes />
      </div>
    </>
  );
};
