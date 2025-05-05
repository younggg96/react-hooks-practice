import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // 导入 Tailwind CSS 样式

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);