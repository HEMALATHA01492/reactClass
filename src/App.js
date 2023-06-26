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

import React, { useState } from "react";
function Note({note}) {
  return(
  <li>{note.content}</li>
  )

}

function App( props ) {
 //console.log(notes);
 //states for notes
 const [notes ,setNotes] =useState(props.notes);
 const [newNote, setNewNote]=useState('...new note');

 //define addNote Method
 let addNote=(event)=>{
  event.preventDefault();
  // console.log("button clicked");

  let noteObject={
    id:notes.length + 1,
    content: "newNote",
    important: Math.random() <0.5,
  }

  setNewNote(notes.concat(noteObject));

  setNewNote('...new note')
 }
 let handleNoteChange=(event) =>{
  setNewNote(event.target.value);
  console.log(newNote);
 }

  return (
    <div> 
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
           <Note key={note.id} note={note}/>
           )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">Add Note</button>
      </form>
      
    </div>

  )
}

export default App;
    