import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TransactionProvider } from './contest/TransactionContext.jsx'
import './index.css'
import { EthProvider } from './EthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <EthProvider>
 <TransactionProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </TransactionProvider>
  </EthProvider>
 
)
