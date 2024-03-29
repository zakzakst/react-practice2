import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { RouterProvider } from 'react-router-dom'
// import routesBasic from './chap08/routesBasic'
// import routesLink from './chap08/routesLink'
import routesParam from './chap08/routesParam'
import { HelmetProvider } from 'react-helmet-async'
import routesHandle from './chap08/routesHandle'
import routesMyLink from './chap08/routesMyLink'
import routesScroll from './chap08/routesScroll'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// #region ■■ 8-1 ■■

// root.render(
//   <RouterProvider router={routesBasic} />
// )

// root.render(
//   <RouterProvider router={routesLink} />
// )

// root.render(
//   <RouterProvider router={routesParam} />
// )

// root.render(
//   <HelmetProvider>
//     <RouterProvider router={routesHandle} />
//   </HelmetProvider>
// )

// root.render(
//   <HelmetProvider>
//     <RouterProvider router={routesParam} />
//   </HelmetProvider>
// )

// root.render(
//   <HelmetProvider>
//     <RouterProvider router={routesMyLink} />
//   </HelmetProvider>
// )

root.render(
  <RouterProvider router={routesScroll} />
)

// #endregion

reportWebVitals();