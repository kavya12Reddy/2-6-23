import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import {useState} from 'react'
import counter from './reducers/counter';
import { increment,decrement } from './actions';

     function App() {
     const counter=useSelector(state=>state.counter)
     const dispatch=useDispatch()
  return (
    <div className="App">
    <h1>{counter}</h1>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
  }

export default App;