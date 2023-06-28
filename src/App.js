import './App.css';
import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoFilter } from './components/TodoFilter/TodoFilter';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoList/TodoItem';
import { CreateTodoButton } from './components/TodoButton/CreateTodoButton';

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25} />
      <TodoFilter />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
