import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [inputTitle] = useState();
  let [inputContents] = useState();
  return (
    
    <div className="App">
      <h1 className="title">Todo-List</h1>
      <div className="insertBox">
        <div className="insertBoxTitle">
          <input 
            className="titleInput" 
            type="text"
            value={inputTitle}
          ></input>
        </div>
        <div className="insertBoxContents">
        <input 
            className="contentsInput" 
            type="text"
            value={inputContents}
          ></input>
        </div>

       

      </div>
    </div>
  );
}

export default App;
