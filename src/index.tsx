import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Landing from './pages/landing/landing';
import ErrorBoundary from './pages/error/ErrorBoundary';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const Loading = () => (
  <div className="w-full h-full flex flex-col content-center">
    <h1 className="mx-auto mt-20 text-xl border-b-0 text-center">Loading...</h1>
  </div>
);

const NotFound = () => (
  <div className="w-full h-full flex flex-col content-center">
    <h1 className="mx-auto mt-20 text-xl border-b-0 text-center">Not Found</h1>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
};

root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<NotFound />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
