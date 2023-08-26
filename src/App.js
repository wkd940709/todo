import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [던캔슬,던캔슬ch] = useState('DONE');
  let [inputContents] = useState();
  return (
    
    <div className="App">
      <h1 className="header">Todo-List</h1>
      <div className="inputBox">
        <div className="title">
          <h2>Title</h2>
          <input type="text" className="title"></input>
        </div>
        <div className="contents">
          <h2>Contents</h2>
          <input type="text" className="contents"></input>
        </div>
        <div className="add">
          
          <button className="addButton">ADD</button>
        </div>
      </div>

      <div className="listBox">
        <div className="item">
          <div>
            <div className="check"></div>
          </div>
          <div className="본문">
            <h3>뽀미 산책</h3>
            <p>30분 이상..!</p>
          </div>
          <div>
            <button className="delete">
              DELETE
            </button>
            <button className="done" onClick={() => {던캔슬ch('CANCEL')}}>
              {던캔슬}
            </button>
          </div>
        </div>

        <div className="item">
          <div>
            <div className="check"></div>
          </div>
          <div className="본문">
            <h3>야채먹기</h3>
            <p>싸밥먹고싶다</p>
          </div>
          <div>
            <button className="delete">
              DELETE
            </button>
            <button className="done">
              DONE
            </button>
          </div>
        </div>

        <div className="item">
          <div>
            <div className="check"></div>
          </div>
          <div className="본문">
            <h3>운동</h3>
            <p>아침6시에 인나서 하고가기</p>
          </div>
          <div>
            <button className="delete">
              DELETE
            </button>
            <button className="done">
              DONE
            </button>
          </div>
        </div>
        
        <div className="item">
          <div>
            <div className="check"></div>
          </div>
          <div className="본문">
            <h3>일찍 자기</h3>
            <p>자기 전에 유튜브 안 보기!</p>
          </div>
          <div>
            <button className="delete">
              DELETE
            </button>
            <button className="done">
              DONE
            </button>
          </div>
        </div>

        
        
      </div>
    </div>
  );
}

export default App;
