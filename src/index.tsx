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
    <MoralisProvider 
      serverUrl="https://kzd0gybfsdsw.usemoralis.com:2053/server" 
      appId="vDMsZ72WZ3ScaGSeFeaVU0MfNd3miCsEKJlNezmA"
    >
      <App/>
    </MoralisProvider>
  </React.StrictMode>
);
