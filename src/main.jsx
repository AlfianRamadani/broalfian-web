import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import ToggleBtn from './components/toggleBtn';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="fixed bottom-8 right-8 md:right-16 z-50">
      <ToggleBtn />
    </div>
    <App />
  </StrictMode>
);
