import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);





//task2 pending
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//task1
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import App from './App';

// const initialState ={
//   good:0,
//   ok:0,
//   bad:0
// };

// const counterReducer = (state=initialState, action) => {
//     switch (action.type) {
//         case 'GOOD':
//             return {...state, good: state.good +1};
//         case 'OK':
//             return {...state, ok: state.ok +1};
//         case 'BAD':
//             return {...state, bad: state.bad +1};
//         case 'RESET':
//             return initialState;
//         default:
//             return state;
//     }
// }


// const store = createStore(counterReducer);
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//         <App />
//     </Provider>
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

