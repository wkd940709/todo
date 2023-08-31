import './App.css';
import { useState } from 'react';
import InputBox from './component/InputBox';
import ListBox from './component/ListBox';

function App() {
  let [title, setTitle] = useState("");
  let [contents, setContents] = useState("");
  let [todos, setTodos] = useState([]);

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
    console.log({todos});
    setTodos(updatedTodos);
  };
  // const handleKeyPress = e => {
  //   addTodo();
  // }
  return (
    <div className="App">
      <h1 className="header">Todo-List</h1>
      <InputBox title={title} setTitle={setTitle} contents={contents} setContents={setContents} addTodo={addTodo} />
      {todos.map(todo => <ListBox title={todo.title} id={todo.id} key={todo.id} todos={todos} contents={todo.contents} deleteTodo={deleteTodo} />
      )}
    </div>
  );
}
export default App;
