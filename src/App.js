//-----------Day 9-------------
//useRef-hook;
//to create  a mutable reference to an element or a value that persists across render cycles

import React, { useRef } from 'react';

function App() {

    const inputRef= useRef(null);
    let handButtonClick=() =>{
        //handle the input text
       // console.log(inputRef)
        inputRef.current.focus();
    }
  return (
    <div>
 <input types='text' />
 <button onClick={handButtonClick}>Focus Input</button>
    </div>
  )
}

export default App;