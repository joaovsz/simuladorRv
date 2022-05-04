import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {TableProvider}  from "./components/context/formContext";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <TableProvider>
    <App />
    </TableProvider> 
  </React.StrictMode>
)
