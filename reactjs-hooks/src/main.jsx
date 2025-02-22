import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './layout/Layout.jsx';
import './index.css';

createRoot(document.getElementById('hooks')).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
