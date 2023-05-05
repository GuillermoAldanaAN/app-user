import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { getUserById } from './store/actions/userActions';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.UserReducer);

  const searchUser = () => {
    dispatch(getUserById());
  }

  return (
    <React.Fragment>
      <h2>{user.name}</h2>
      <h6>{user.username}</h6>
      <h6>{user.email}</h6>
      <button onClick={searchUser}>Extraer usuario</button>
    </React.Fragment>
  )
}

export default App
