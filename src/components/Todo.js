const Todo = ({ todo, dispatch }) => {
  return (
    <div className='col-md-4 mb-4'>
      <div className=' card py-3 px-4'>
        <h5
          className='mb-1'
          style={{ color: todo.completed ? '#AAA' : '#000' }}
        >
          {todo.name}
        </h5>
        <div className='d-flex'>
          <button className='btn btn-primary btn-sm btn-block d-none'></button>
          <button
            className='btn btn-primary btn-sm btn-block mr-1'
            onClick={() =>
              dispatch({ type: 'TOGGLE_TODO', payload: { id: todo.id } })
            }
          >
            Toggle
          </button>
          <button
            className='btn btn-danger btn-sm btn-block ml-1'
            onClick={() =>
              dispatch({ type: 'DELETE_TODO', payload: { id: todo.id } })
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
