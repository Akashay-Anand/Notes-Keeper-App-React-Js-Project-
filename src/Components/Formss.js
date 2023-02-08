import React,{useState} from "react";
import style from '../Styles/CompStyle.css';
// MUI import
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function MyForm(props){
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
      title: "",
      content: "",
      date:""
    });
  
    function handleChange(event) {
      const { name, value } = event.target;
  
      setNote((prevNote) => {
        return {
          ...prevNote,
          [name]: value
        };
      });
    }
  
    function submitNote(event) {
        let currentDate = new Date().toJSON().slice(0, 10);
        console.log(currentDate)
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
            date: currentDate
        });
      event.preventDefault(); // prevent reload of page 
    }
  
    function expand() {
      setExpanded(true);
    }
    return(
        <div>
            <form className="create-note">
                {isExpanded ? (
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                ) : null}

                <textarea
                name="content"
                onClick={expand}
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                rows={isExpanded ? 2 : 1}
                />
                <button onClick={submitNote}>ADD</button>
                {/* <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
                </Zoom> */}
            </form>
        </div>
    )
}

export default MyForm;

        // <div>
        //     <form>
        //         <input 
        //         name="title" 
        //         placeholder="Title"/>
        //         <textarea name="content" placeholder="your notes"
        //         row="3"/>
        //         <button>ADD</button>
        //     </form>
        // </div>