//day 10 A simple Note Taking application
// import React from 'react';
// function App(props) {
//   const {notes} = props;
//   console.log(notes);

//   return (
//     <div> 
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <li key={note.id}>{note.content}</li>)}
//       </ul>
      
//     </div>

//   )
// }

// export default App;

// import React, { useState } from "react";
// function Note({note}) {
//   return(
//   <li>{note.content}</li>
//   )

// }

// function App( props ) {
//  //console.log(notes);
//  //states for notes
//  const [notes ,setNotes] =useState(props.notes);
//  const [newNote, setNewNote]=useState('...new note');

//  //define addNote Method
//  let addNote=(event)=>{
//   event.preventDefault();
//   // console.log("button clicked");

//   let noteObject={
//     id:notes.length + 1,
//     content: "newNote",
//     important: Math.random() <0.5,
//   }

//   setNewNote(notes.concat(noteObject));

//   setNewNote('...new note')
//  }
//  let handleNoteChange=(event) =>{
//   setNewNote(event.target.value);
//   console.log(newNote);
//  }

//   return (
//     <div> 
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//            <Note key={note.id} note={note}/>
//            )}
//       </ul>

//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange}/>
//         <button type="submit">Add Note</button>
//       </form>
      
//     </div>

//   )
// }

// export default App;
//-----------------------------------------


import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import CreateNote from './components/CreateNote';
import ReadNotes from './components/ReadNotes';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import EditNote from './components/EditNote';

function App() {

  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');
  const [showStatus, setShowStatus] = useState('all');

  const padding = {
    padding: 15
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes/')
      .then(response => setNotes(response.data));
  });

  const newNoteContentRef = useRef(null);

  let addNote = (event) => {
    event.preventDefault();

    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant==='true',
    }

    axios
      .post('http://localhost:3001/notes/', noteObject)
      // .then(response => console.log(response));

    setNewNoteContent('');
    setNewNoteImportant('');
    newNoteContentRef.current.focus();
 function App() {

  let handleStatusChange = (event) => {
    setShowStatus(event.target.value);
  }

  return (
    <Router>

      <div>
        <Link style={padding} to="/">Home</Link>
        <Link style={padding} to="/read">Read Notes</Link>
        <Link style={padding} to="/create">Create Notes</Link>
        <Link style={padding} to="/edit">Edit Notes</Link>
      </div>

      <Routes>
        <Route path='/read' element={<ReadNotes showStatus={showStatus} handleStatusChange={handleStatusChange} notes={notes} />} />
        <Route path='/create' element={<CreateNote addNote={addNote} newNoteContent={newNoteContent} handleNoteChange={handleNoteChange} newNoteContentRef={newNoteContentRef} handleSelectChange={handleSelectChange} newNoteImportant={newNoteImportant} />} />
        <Route path='/' element={<Home />} />
        <Route path='/edit' element={<EditNote />} />
      </Routes>
    </Router>
     )
    }
    
export default App;