import React from 'react';
import './App.css';
import AddToDo from './components/AddToDo';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';




function App(){


  

  return (
    <div  style={{textAlign:"center"}}>
      <h1>Todo react + typescript</h1>
      <Navbar/>
      <AddToDo />
      <Todos/>
    </div>
  );
}

export default App;
