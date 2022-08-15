import React from "react";
import { MoralisProvider } from "react-moralis";
import { createRoot } from 'react-dom/client';
import "./app/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing components
import App from "./app/App";

const container = document.getElementById('root');
const root = createRoot(container!);

// In the below render, MoralisProvider connects the app to the Moralis instance on the cloud
root.render(
    <React.StrictMode>
        <MoralisProvider serverUrl="https://kzd0gybfsdsw.usemoralis.com:2053/server" appId="vDMsZ72WZ3ScaGSeFeaVU0MfNd3miCsEKJlNezmA">
            <App/>
        </MoralisProvider>
    </React.StrictMode>
);
