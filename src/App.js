//---------Day3 react----------------------
//1.

import React from "react";
function Note({note}) {
  return(
  <li>{note.content}</li>
  )

}

function App( {notes} ) {
 console.log(notes);

  return (
    <div> 
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note key={note.id} note={note}/>)}
      </ul>
      
    </div>

  )
}
export default App;



//----------Day -5 June 14th Evening CLASS---------
//useState Hook

// import React,{ useState } from 'react';

// function App() {

// const [counter,setCounter] = useState(0);

// setTimeout(
//   ()=> setCounter(counter + 1),1000
// );
//  console.log('rendering...', counter);

//   return (
//     <div>{counter}</div>
//   )
// }

// export default App;
// import React,{ useState } from 'react';

// function App() {

// const [counter,setCounter] = useState(0);

// const handlePlusClick=()=>{
//   setCounter (counter + 1);
// }

// const handleMinusClick=()=>{
//   setCounter (counter - 1);
// }

// const handleZeroClick=()=>{
//   setCounter (0);
// }

// return (
//   <div>
//     <div>{counter}</div>
//     <button onClick={handlePlusClick}>Plus</button>
//     <button onClick={handleMinusClick}>Minus</button>
//     <button onClick={handleZeroClick}>Zero</button>
//   </div>
//   )
// }
// export default App;


//--------------------
// import React,{ useState } from 'react';

// const Display = (props) =>{
//   return(
//     <div> { props.counter} </div>
//   )
// }

// function Button(props){
//   return(
//     <button onClick={props.handleClick}>{props.text}</button>
//    )
// }

// function App() {

// const [counter,setCounter] = useState(0);

// const handlePlusClick=()=>setCounter (counter + 1);
// const handleMinusClick=()=>setCounter (counter - 1);
// const handleZeroClick=()=>setCounter (0);


// return (
//   <div>
//     <Display counter ={counter}/>
//     <Button text='Plus'   handleClick={handlePlusClick}/>
//     <Button text='Minus'  handleClick={handleMinusClick}/>
//     <Button text='Zero'   handleClick={handleZeroClick}/>
//   </div>
//   )
// }
// export default App;






















//----------Day -4 June 14th MORNING CLASS---------

//Functional Component
// import React from 'react'
// function App() {
//   return (
//     <div>Good Day World!</div>
//   )
// }
// export default App

//Class Component
// import { Component } from "react";

// class App extends Component {

//   render(){
//     return <div>Good Day World!</div>
//   }

// }
// export default App;

//Passing Props in  Functional Component
// import React from 'react';

// function Hello(props){
//   return(
//   <div>Great Day {props.name} !</div>
//  )
// }
// function App() {
//   return (
//     <div>
//     <Hello name={ 'Hema' }/>
//     </div>

//   )
// }
// export default App;

//Passing Props in Class component

// import { Component } from "react";
// class Hello extends Component {
//   render(){
//     const { name }=this.props;

//     return(
//       <div>Hello, { this.props.name } !</div>
//     )
//   }

// }

// class App extends Component {

//   render(){
//     return( <div>
//       <Hello name = { 'Hema'} />
//       </div>)
//   }

// }
// export default App;


//states in Component
// import React,{ Component } from 'react';

// export class App extends Component{
//   componentDidMount(){
//     console.log('component mounted');
    
//   }

//   componentDidUpdate(){

//   }

//   componentWillUnmount(){

//   }


// render(){
//       return( <div>Hello World!</div>)
//     }
  
// }
//   export default App;
//-------------EXAMPLE OF Stateful Component------

// import React, { Component } from "react";

// export class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state={
//       count: 0,
//     }
//   }
 
//   handleClick=() => {
//     this.setState((prevState) =>({
//       count: prevState.count + 1,
//     }));
//   }
//   handle1Click=() => {
//     this.setState((prevState) =>({
//       count: prevState.count - 1,
//     }));
//   }
//   handle2Click=() => {
//     this.setState((prevState) =>({
//       count: 0,
//     }));;
//   }



//   render(){
//     return(
//     <div>

//       <p>Count: { this.state.count } </p>
//       <button onClick={ this.handleClick } >Plus</button>
//       <button onClick={ this.handle1Click }>Minus</button>
//       <button onClick={ this.handle2Click }>Zero</button>
//     </div>
//     )
//   }

// }
// export default App;
//--------
// import React,{Component} from 'react';
// import Hello from './Components/Hello';

// export class App extends Component{
//   render(){
//     return(
//       <div>
//         <Hello />
//       </div>
//     )
//   }
// }


// export default App
//----------Day -3 June 13th EVENING CLASS---------
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//june 13th react class-3
// import React from "react";
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

// import React from "react";
// function Note({note}) {
//   return(
//   <li>{note.content}</li>
//   )

// }

// function App( {notes} ) {
//  console.log(notes);

//   return (
//     <div> 
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <Note key={note.id} note={note}/>)}
//       </ul>
      
//     </div>

//   )
// }

// export default App;
