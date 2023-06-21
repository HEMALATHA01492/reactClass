// //-----DAY 8-------
// //1.Props Drilling


// import React from 'react';
// function GrandChildComponent(props){
//     return(
//         <div>
//             <h3>Grand Child Component</h3>
//             <p>{ props.message}</p>
//         </div>
//     )
// }


// function ChildComponent(props){
//     // const message='Hello,GrandChild';
   
//     return(
//         <div>
//             <h2>Child Component</h2>
//             <p>{ props.message}</p>
//             <GrandChildComponent message={props.message}  />
//             {/* <GrandChildComponent message={message}  /> */}

//         </div>
//     )
// }

// function App() {

//     //Parent Component Data
//     const message='Hello, Child';
//   return (
//     <div>
//         <h1>Parent Component</h1>
//         <ChildComponent message={message} />
//     </div>
//   )
// }

// export default App;
//---------------------------------------------------//
// 2.Create contact
// import React,{createContext, useContext, useState, } from 'react';
// const MessageContext=createContext();
// function ChildComponent(){
//     const message=useContext(MessageContext);
//     return(
//         <div>
//             <h2>ChildComponent</h2>
//             <p>{message}</p>
//         </div>
//     )
    

// }
// function App() {
//     const [message,setMessage]=useState('Hello from App');
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <p>{message}</p>
//         <MessageContext.Provider value={message}>
//             <ChildComponent />
//         </MessageContext.Provider>
//       </div>
//     )
//   }
    

// export default App;

//Class TASK Create Profile name change

import React, { createContext, useContext, useState } from 'react';

const ProfileContext=createContext();

function Profile(){
    const {profileName,setProfileName}=useContext(ProfileContext);
   let onChangeProfileNameHandler=(event)=>{
    setProfileName(event.target.value)
   // console.log(event.target.value)
   }
   
    return(
        <div>
            <h2>Profile Name:{profileName}</h2>
            <input
            type='text'
            value={profileName} 
            onChange={onChangeProfileNameHandler}/>
        </div>
    )
}

function App() {
    const [profileName, setProfileName]=useState('');
  return (
    <div>
        <ProfileContext.Provider value={{profileName,setProfileName}}>
        <Profile />
        </ProfileContext.Provider>
        
    </div>
  )
}

export default App;