// 28 JUNE-Evening
import React from 'react';
import ReactDOM from  'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import {Provider} from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);




// 28 JUNE-Morning
// import React from 'react';
// import ReactDOM from  'react-dom/client';
// // import App from './App';
// import { createStore } from 'redux';
// import {Provider}from 'react-redux';

// const counterReducer=(state, action)=>{
//   if( action.type == 'INCREMENT'){
//     return state+1;
//   }else if (action.type == 'DECREMENT'){
//     return state+1;
//   }else if(action.type == 'ZERO'){
//        return 0;
//   }
//    return state;
// }
//Using swith case -definition redeux
// const counterReducer=(state=0, action)=>{
//   switch(action.type){
//     case 'INCREMENT':
//          return state+1;
//     case 'DECREMENT':
//          return state-1;
//     case 'ZERO':
//           return 0;
//     default:
//           return state;
//   }
// }
//step 1:
//create new store
// const store=createStore(counterReducer);
// console.log(store.getState());
// //perform actions-3 times increment  and print state of zero then decrement
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState());

// store.dispatch({type: 'ZERO'});
// console.log(store.getState());

// store.dispatch({type: 'DECREMENT'});
// console.log(store.getState());

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

//----------------------over----------
//step2

// const store=createStore(counterReducer);
// store.subscribe(() =>{
//   const storeNow =store.getState();
//   console.log(storeNow);

// })
//perform actions-3 times increment  ,zero then decrement
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'ZERO'});
// store.dispatch({type: 'DECREMENT'});
// const App =()=>{
//   return(
//     <div>
//       <div>
//         {store.getState()}
//       </div>
//       <button onClick={ e => store.dispatch ({ type: 'INCREMENT'})}>Plus</button>
//       <button onClick={ e => store.dispatch ({ type: 'DECREMENT'})}>Minus</button>
//       <button onClick={ e => store.dispatch ({ type: 'ZERO'})}>Reset</button>

//     </div>
//   )
// }
//need for 2 nd step
// const root =ReactDOM.createRoot(document.getElementById('root'));
// const renderApp =()=>{
//   root.render(<App />);
// }
// renderApp();
// store.subscribe(renderApp);
//--------------------over-------------

//3.step -3-  ERROR IN PROGRAM TRY TO CORRECT IT
//after install npm install react-redux
//type  import {Provider}from 'react-redux';

// import React from 'react';
// import ReactDOM from  'react-dom/client';
// import { createStore } from 'redux';
// import {Provider} from 'react-redux';

// const counterReducer=(state=0, action)=>{
//   switch(action.type){
//     case 'INCREMENT':
//          return state+1;
//     case 'DECREMENT':
//          return state-1;
//     case 'ZERO':
//           return 0;
//     default:
//           return state;
//   }
// }

// const store = createStore(counterReducer);
// const App =()=>{
//     return(
//       <div>
//         <div>
//           {store.getState()}
//         </div>
//         <button onClick={ e => store.dispatch ({ type: 'INCREMENT'})}>Plus</button>
//         <button onClick={ e => store.dispatch ({ type: 'DECREMENT'})}>Minus</button>
//         <button onClick={ e => store.dispatch ({ type: 'ZERO'})}>Reset</button>
  
//       </div>
//     )
//   }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
//till now no App.js required.
//Step 4
// import React from 'react';
// import ReactDOM from  'react-dom/client';
// import App from './App';
// import { createStore } from 'redux';
// import {Provider} from 'react-redux';

// const counterReducer=(state=0, action)=>{
//   switch(action.type){
//     case 'INCREMENT':
//          return state+1;
//     case 'DECREMENT':
//          return state-1;
//     case 'ZERO':
//           return 0;
//     default:
//           return state;
//   }
// }

// const store = createStore(counterReducer);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );












//DAY 3 13TH-JUNE
// import React from "react";
// import ReactDOM from  'react-dom/client';
// import App from './App';


// const notes =[
//  { id:1,
//   content: "working with lists",
//   important: true
// },
// { id:2,
//   content: "Usage of keys",
//   important: false
// },

// { id:3,
//   content: "Conditional Rendering",
//   important: true
// },
// { id:4,
//   content: "Handling Events",
//   important: true
// },
// { id:5,
//   content: "Props Vs State",
//   important: false
// }
// ]
// ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />);

//----------Day -5 June 14th Evening CLASS---------

// import React from "react";
// import ReactDOM from  'react-dom/client';
// import App from './App';



// ReactDOM.createRoot(document.getElementById('root')).render(< App />);

//class 1 and general study
//import another component in React like App;
// import Contain from "./Contain";
// ReactDOM.createRoot(document.getElementById('root')).render(< Contain />);
//---------------------------------------

//using JSX
// const myElement = <h1>I Love JSX!</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
//--------------------------------------------

//Without using JSX-JavaScript XML.
//XML stands for eXtensible Markup Language.

// const myElement = React.createElement('h1', {}, 'I do not use JSX!');

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
















//----------Day -4 June 14th MORNING CLASS---------

// import React from "react";
// import ReactDOM from  'react-dom/client';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(< App />);
//----------Day -3 June 13th EVENING CLASS---------
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
//import App from './App';
// import reportWebVitals from './reportWebVitals';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
