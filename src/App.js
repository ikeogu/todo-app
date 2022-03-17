// import logo from './logo.svg';
import database from './database.json';
import React, { useState } from 'react';
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import Toggle from './components/ThemeToggle';
import { ThemeContext } from './components/ThemeContext';


//components
import Header from './Header';

import './App.css';

function App() {
  const [toDoList, setToDoList] = useState(database);
  const { theme } = React.useContext(ThemeContext);
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const handleFilterAll = () => {

    setToDoList(database);
  }
  const handleFilterCompleted = () => {
    let filtered = toDoList.filter(task => {
      return task.complete == true;
    });
    setToDoList(filtered);
  }
  const handleFilterActive = () => {
    let filtered = toDoList.filter(task => {
      return task.complete == 'active';
    });
    setToDoList(filtered);
  }
  function handleRemove(id) {
    let newList = toDoList.filter((task) => task.id !== id);
    setToDoList(newList);
  }
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
 

  return (
    <div className={(theme === 'dark' ? 'bg-desaturated-blue' : 'bg-desaturated-light') + 'App' }>
      <Header />
      <div className='mx-auto max-w-3xl -mt-64' >
        <div className='flex flex-row space-x-96' >
          <h1 className='text-6xl '>ToDo </h1>
          <Toggle/>
        </div>
        <div className='mt-5'>
          <ToDoForm addTask={addTask}/>
          <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} handleFilterCompleted={handleFilterCompleted} handleFilterAll={handleFilterAll} handleFilterActive={handleFilterActive} handleRemove={(e)=>handleRemove(e)} />
        </div>
       
      </div>
     
     
    </div>
  );
}

export default App;
