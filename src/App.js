import { Alert, Breadcrumb } from 'antd';
import React from 'react';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { useMoralis } from "react-moralis";
import Home from './Home';
import MergeRoom from './MergeRoom';
import Login from './Login';
import Explore from './Explore';
import ShowProposals from './ShowProposals';

const Rooter = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  const { isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  console.log();

  if (!isAuthenticated && location.pathname == '/') {
    return (
      <div>
        <Login/>
        <Home/>
      </div>
    );
    
  }else{

    return (
      <div className="demo">
        <div className="demo-nav">
          <Link to="/" style={{'margin':'20px'}}>Home</Link>
          <Link to="/explore" style={{'margin':'20px'}}>Explore</Link>
          <Link to="/merge-room" style={{'margin':'20px'}}>Create merge</Link>
          <Link to="/all-proposals" style={{'margin':'20px'}}>Proposals</Link>
          <a onClick={logOut} style={{'margin':'20px'}}>Logout</a>
        </div>
        <Routes>
          <Route path="/explore" element={<Explore/>} />
          <Route path="/merge-room" element={<MergeRoom/>} />
          <Route path="/all-proposals" element={<ShowProposals/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </div>
    );
  }
};

const App: React.FC = () => (
  <HashRouter>
    <Rooter />
  </HashRouter>
);

export default App;