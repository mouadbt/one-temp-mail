import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { EmailContextProvider } from './context/providers/EmailContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <EmailContextProvider>
    <App />
  </EmailContextProvider>
  </StrictMode>,
)
