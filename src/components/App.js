import React, { useState } from 'react';
import './../styles/App.css';


const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      setList([...list, text]);
      setText('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  return (
    <div className="to-do">
      <h2>To-Do List</h2>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {list.map((item, index) => (
          <li key={index} id='div'>
            {item}
            <button onClick={() => handleRemoveTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;