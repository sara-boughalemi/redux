import InputField from './components/InputField'
import TodosList from './components/TodosList';
import React from 'react';


import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="header">
     <header>
       <h1>Todo List</h1>
     </header>
     </div>
     <InputField />
     <TodosList />
     
    </div>
  );
}

export default App;

