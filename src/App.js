import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [inputTitle] = useState();
  let [inputContents] = useState();
  return (
    
    <div className="App">
      <h1 className="header">Todo-List</h1>
      <div className="inputBox">
        <div className="firstLine">
          <div>
            title
          </div>
          <div>
            contents
          </div>
        </div>
        <div className="secondLine">  
          <div className="topTitle">
            <input 
              className="titleInput" 
              type="text"
              value={inputTitle}
            ></input>
          </div>
          <div className="topContents">
            <input 
                className="contentsInput" 
                type="text"
                value={inputContents}
              ></input>
          </div>
          <button className="addButton">add</button>
        </div>

       

      </div>
      <div className="bottom">
        <div>box1</div>
        <div>box2</div>
        <div>box3</div>
        <div>box4</div>
        <div>box5</div>
        <div>box6</div>
        <div>box7</div>
        <div>box8</div>
        
      </div>
    </div>
  );
}

export default App;
