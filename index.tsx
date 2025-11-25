import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Select the DOM container where the React app will attach
const container = document.getElementById('root');

// Fail fast if the container is missing to prevent silent failures
if (!container) {
  throw new Error("Fatal: Could not find root element '#root' to mount React application.");
}

// Create a concurrent root for React 18+
const root = ReactDOM.createRoot(container);

// Render the root component within StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);