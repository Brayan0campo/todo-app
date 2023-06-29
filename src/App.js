import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoFilter } from './components/TodoFilter/TodoFilter';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoList/TodoItem';
import { CreateTodoButton } from './components/TodoButton/CreateTodoButton';

const defaultTodo = [
  { text: 'Curso de React.Js', completed: true },
  { text: 'Curso de Javascript', completed: true },
  { text: 'Curso de Next.Js', completed: false },
  { text: 'Curso de ApiREST', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoFilter />

      <TodoList>
        {defaultTodo.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
