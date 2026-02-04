import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Import the Context you just created
import { AuthProvider } from './contexts/AuthContext' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>  {/* <--- THIS WRAPPER IS CRITICAL */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
