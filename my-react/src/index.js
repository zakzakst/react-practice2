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
// import HookCallbackRef from './chap07/HookCallbackRef'
// import HookReducer from './chap07/HookReducer'
// import HookReducerUp from './chap07/HookReducerUp'
import HookReducerInit from './chap07/HookReducerInit'

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

// root.render(
//   <HookCallbackRef />
// )

// root.render(
//   <HookReducer init={0} />
// )

// root.render(
//   <HookReducerUp init={0} />
// )

root.render(
  <HookReducerInit init={0} />
)

// #endregion

reportWebVitals();