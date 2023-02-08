// import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import Header from './Components/AppHeader';
import Footer from './Components/AppFooter';
import Form from './Components/Formss';
import Notes from './Components/Notes';
// import style from './Styles/CompStyle.css';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header/>
      <Form onAdd ={addNote}/>
      {notes.map((noteItem,index) => {
        return(
          <Notes key={index} id={index} title={noteItem.title} content={noteItem.content} date={noteItem.date}
          onDelete={deleteNote}/>
        );
      })}
      {/* <Notes key={1} title="Note title" content="Note Content" /> */}
      <Footer/>
    </>
  );
}

export default App;
