import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/screens/Home/Home.jsx'
import Layout from './components/layout/Layout.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
     <Home/>
     </Layout>
  </React.StrictMode>
);