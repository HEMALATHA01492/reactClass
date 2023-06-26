//----------Doubt Session June 14th Evening CLASS---------

import React from "react";
import ReactDOM from  'react-dom/client';
import App from './App';
const notes =[
     { id:1,
      content: "working with lists",
      important: true
    },
    { id:2,
      content: "Usage of keys",
      important: false
    },
    
    { id:3,
      content: "Conditional Rendering",
      important: true
    },
    { id:4,
      content: "Handling Events",
      important: true
    },
    { id:5,
      content: "Props Vs State",
      important: false
    }
    ]
    ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)










