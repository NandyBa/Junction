import React from "react";
import "./index.css";
import App from "./App";
import Explore from './Explore';
import Home from './Home';
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://qrewvab57tnp.usemoralis.com:2053/server" appId="zLoU1HL3sK1G9aDqkRUNSN5oApIBy8kFfYJn40Ba">
      <App/>
      </MoralisProvider>
  </React.StrictMode>
);
/*
root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://qrewvab57tnp.usemoralis.com:2053/server" appId="zLoU1HL3sK1G9aDqkRUNSN5oApIBy8kFfYJn40Ba">
      <App />
      <Explore />
    </MoralisProvider>
  </React.StrictMode>
);
*/