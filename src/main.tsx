// Apply sandboxed window.fetch setter compatibility shim
try {
  if (typeof window !== 'undefined' && 'fetch' in window) {
    const originalFetch = window.fetch;
    let currentFetch = originalFetch;
    try {
      Object.defineProperty(window, 'fetch', {
        configurable: true,
        enumerable: true,
        get() {
          return currentFetch;
        },
        set(val) {
          currentFetch = val;
        }
      });
    } catch (e) {
      if (typeof Window !== 'undefined' && Window.prototype) {
        Object.defineProperty(Window.prototype, 'fetch', {
          configurable: true,
          enumerable: true,
          get() {
            return currentFetch;
          },
          set(val) {
            currentFetch = val;
          }
        });
      }
    }
  }
} catch (e) {
  console.warn('Could not define fetch property setter:', e);
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
