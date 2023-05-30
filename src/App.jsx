import React, { useReducer } from 'react';
import './App.css'

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const App = () => {
  // Initial state
  const initialState = { count: 0 };

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>&nbsp;
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>&nbsp;
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default App;
