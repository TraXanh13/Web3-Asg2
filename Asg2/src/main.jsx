import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {F1Context} from './F1Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <F1Context>
      <App />
    </F1Context>
  </React.StrictMode>
)
