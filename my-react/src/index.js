import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import StateEffect from './chap07/StateEffect'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// #region ■■ 7-1 ■■

root.render(
  <StateEffect init={0} />
)

// #endregion

reportWebVitals();