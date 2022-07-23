import { Alert, Breadcrumb } from 'antd';
import React from 'react';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { useMoralis } from "react-moralis";
import Home from './Home';
import Room from './Room';
import Login from './Login';
import Explore from './Explore';

const Rooter = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/" style={{'margin':'20px'}}>Home</Link>
        <Link to="/explore" style={{'margin':'20px'}}>Explore</Link>
        <Link to="/room" style={{'margin':'20px'}}>Create aquisition</Link>
      </div>
      <Routes>
        <Route path="/explore" element={<Explore/>} />
        <Route path="/room" element={<Room/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => (
  <HashRouter>
    <Rooter />
  </HashRouter>
);

export default App;