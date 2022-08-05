import React from "react";
import { MoralisProvider } from "react-moralis";
import { createRoot } from 'react-dom/client';
import "./app/index.css";

// Importing components
import App from "./app/App";


const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://qrewvab57tnp.usemoralis.com:2053/server" appId="zLoU1HL3sK1G9aDqkRUNSN5oApIBy8kFfYJn40Ba">
      <App/>
    </MoralisProvider>
  </React.StrictMode>
);
