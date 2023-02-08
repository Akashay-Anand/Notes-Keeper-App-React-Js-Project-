import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function clicknotice(){
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>{props.date}</p>
      <button onClick={clicknotice}>
        <DeleteIcon/>
      </button>
    </div>
  );
}

export default Note;