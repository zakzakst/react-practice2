import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// import LazyBasic from './chap05/LazyBasic'
// import LazyMulti from './chap05/LazyMulti'
// import SuspenseSimple from './chap05/SuspenseSimple'
// import SuspenseResult from './chap05/SuspenseResult'
import ProfilerBasic from './chap05/ProfilerBasic'

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

// root.render(
//   <LazyMulti />
// )

// root.render(
//   <SuspenseSimple />
// )

// root.render(
//   <SuspenseResult />
// )

root.render(
  <ProfilerBasic />
)

// #endregion

reportWebVitals();