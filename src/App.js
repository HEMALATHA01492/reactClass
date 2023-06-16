//----------TODAY TOPICS---------
//react-router-dom
//BrouserRouter, Switch(now its spells Routes), Link, Route, url params

//1.Without React Router
import React, { useState } from 'react';
import { Link,Route,BrowserRouter as Router, Routes, useParams } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h2>User App</h2>
        </div>
    )
}
function Note({notes}){
    const id=useParams().id;
    const note=notes.find(n =>n.id === Number(id));
    return(
        <div>
            <h2>{note.content}</h2>
        </div>
    )
}
function Notes({notes}){
    return(
        <div>
            <h2>Notes </h2>
            <ul>
            {
                notes.map(note =>
                <li><Link to={`/notes/${note.id}`}>{note.content}</Link></li>)
             }
            </ul>
        </div>
    )
}
function Users(){
    return(
        <div>
            <h2>Users Component</h2>
        </div>
    )
}

function App() {

    // const [page,setPage] = useState('home');
    // const content=()=>{
    //     if(page== 'home'){
    //     return <Home/>;
    //     }else if (page== 'notes'){
    //     return <Notes/>;
    //     }else if  (page== 'users'){
    //     return <Users/>;
    //     }
    // }

    // const toPage=(page)=>(event)=>{
    //     event.preventDefault();
    //     setPage(page);
    // }

    const notes=[
        {
         id:1,
         content: 'JavaScript'    
        },
        {
         id:2,
         content: 'ReactJs'    
        },
        {
         id:3,
         content: 'NodeJs'    
        }
]

    const padding={
        padding:10
    };
  return (
       <Router>
       <div>
        <Link to='/'  style={{padding:10}} >Home</Link>
        <Link to='/notes' style={padding}>Notes</Link>
        <Link to='/users' style={padding}>Users</Link>

            {/* before install react DOM
            <a href='' style={{padding:10}} onClick={toPage('home')}>Home</a>
            <a href='' style={padding} onClick={toPage('notes')}>Notes</a>
            <a href='' style={padding} onClick={toPage('users')}>Users</a> */}
        </div>
      
       <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/notes' element={ <Notes notes={notes}/>}/>
        <Route path='/notes/:id' element={<Note notes={notes}/>}/>
        <Route path='/users' element={ <Users/>}/>
       </Routes>

        {/* { content() } */}
        </Router>
  ) 
}

export default App;