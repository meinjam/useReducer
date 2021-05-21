const Counter = ({ state, dispatch }) => {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <button
          className='btn btn-danger btn-sm'
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          -
        </button>
        <span className='px-2'>{state.count}</span>
        <button
          className='btn btn-success btn-sm'
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
