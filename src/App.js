import './App.css';
import { useState } from 'react';
import InputBox from './component/InputBox';
import ListBox from './component/ListBox';

function App() {
  let [title, setTitle] = useState("");
  let [contents, setContents] = useState("");
  let [todos, setTodos] = useState([]);
  // const addItem = () => {
  //   const newItem = <ListBox title={title} contents={contents} />;
  // }
  const addTodo = () => {
    if (title.trim() !== '') {
      const newTodo = { id: Date.now(), title: title, contents: contents };
      setTodos([...todos, newTodo]);
      setTitle('');
      setContents('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
  
  return (
    <div className="App">
      <h1 className="header">Todo-List</h1>
      {/* <div className="inputBox">
        <div className="title">
          <h2>Title</h2>
          <input 
            type="text" 
            className="titleInput"
            onChange={(e) => {
                setTitle(e.target.value);
            }}></input>
        </div>
        <div className="contents">
          <h2>Contents</h2>
          <input 
            type="text" 
            className="contentsInput"
            onChange={(e) => {
                setContents(e.target.value);
            }}></input>
        </div>
        <div className="add">
          <button 
            className="addButton"
            onClick={addItem}>ADD</button>
        </div>
      </div> */}
      <InputBox title={title} setTitle={setTitle} contents={contents} setContents={setContents} addTodo={addTodo}/>
      {todos.map(todo => (
                    <div key={todo.id}>
                        <ListBox title={todo.title} contents={todo.contents} deleteTodo={deleteTodo} />
                    </div>
                ))}
        
    </div>
  );
}
export default App;
