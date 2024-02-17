import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// import StateEffect from './chap07/StateEffect'
// import HookTimer from './chap07/HookTimer'
// import HookEffect from './chap07/HookEffect'
// import HookRef from './chap07/HookRef'
// import HookRefForward from './chap07/HookRefForward'
import HookCallbackRef from './chap07/HookCallbackRef'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// #region ■■ 7-1 ■■

// root.render(
//   <StateEffect init={0} />
// )

// root.render(
//   <HookTimer init={10} />
// )

// root.render(
//   <HookEffect init={10} />
// )

// root.render(
//   <HookRef />
// )

// root.render(
//   <HookRefForward />
// )

root.render(
  <HookCallbackRef />
)

// #endregion

reportWebVitals();