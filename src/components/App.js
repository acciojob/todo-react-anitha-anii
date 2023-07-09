
import React,{useState} from "react";
import './../styles/App.css';
// import { update } from "cypress/types/lodash";

const App = () => {
  const [text,setText] =useState('');
  const[list,setList] =useState([]);

  function update(e){
    setText(e.target.value);
  }
  function display(){
    if(text.trim()!==''){
      setList([...list,text]);
      setText('');
    }
  }

  function removed(index){
    let upadelist =[...list];
    upadelist.splice(index,1);
    setList(upadelist);
  }

  return (
    <div className="to-do">
        {/* Do not remove the main div */}
       <h2>To-Do List</h2>
       <input type="text" value={text} onChange={update} />
       <button onClick={display}>Add Todo</button>
      
      {list.map((item,index)=>(
          <ul key={index} id="div">
          <li>{item}</li>
          <button onClick={()=>removed(index)}>Delete</button>
          </ul>

    ))
      }

    </div>
  )
}

export default App
