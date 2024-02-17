import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// import MaterialBasic from './chap06/MaterialBasic'
import MaterialDrawer from './chap06/MaterialDrawer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// #region ■■ 6-1 ■■

// root.render(
//   <MaterialBasic />
// )

root.render(
  <MaterialDrawer />
)

// #endregion

reportWebVitals();