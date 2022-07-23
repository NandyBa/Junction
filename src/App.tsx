import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis } from "react-moralis";
import Room from './Room';
import Login from './Login';

function App() {

  return (
    <div>
      <Login />
      <Room />
    </div>
  );
}

export default App;