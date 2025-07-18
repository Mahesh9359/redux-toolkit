import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
import './App.css'

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  );
}
