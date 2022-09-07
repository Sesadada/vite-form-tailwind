import React from 'react';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <WrappedApp />
    </RecoilRoot>
  </React.StrictMode>
);
