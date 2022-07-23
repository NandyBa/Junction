import { Alert, Breadcrumb } from 'antd';
import React from 'react';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { useMoralis } from "react-moralis";
import Home2 from './Home2';
import Room from './Room';
import Login from './Login';
import Explore from './Explore';

/*
const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);
*/



const Home = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/" style={{'margin':'20px'}}>Home</Link>
        <Link to="/explore" style={{'margin':'20px'}}>Explore</Link>
      </div>
      <Routes>
        <Route path="/explore" element={<Explore/>} />
        <Route path="*" element={<span>Home Page</span>} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => (
  <HashRouter>
    <Home />
  </HashRouter>
);

export default App;