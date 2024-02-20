import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { RouterProvider } from 'react-router-dom'
import routesBasic from './chap08/routesBasic'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// #region ■■ 8-1 ■■

root.render(
  <RouterProvider router={routesBasic} />
)

// #endregion

reportWebVitals();