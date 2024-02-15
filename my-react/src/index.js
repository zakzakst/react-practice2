import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// import LazyBasic from './chap05/LazyBasic'
import LazyMulti from './chap05/LazyMulti'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// #region ■■ 5-1 ■■

// root.render(
//   <LazyBasic />
// )

root.render(
  <LazyMulti />
)

// #endregion

reportWebVitals();