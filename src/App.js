import { useReducer, useState } from 'react';
import Todo from './components/Todo';

const reducer = (todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...todos, newTodo(action.payload.name)];
    case 'TOGGLE_TODO':
      return todos.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case 'DELETE_TODO':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return [...todos];
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, completed: false };
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: { name: name } });
    setName('');
  };

  return (
    <div className='container py-5'>
      <form onSubmit={handleSubmit} className='mb-4'>
        <input
          type='text'
          value={name}
          className='form-control'
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <div className='row'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default App;
