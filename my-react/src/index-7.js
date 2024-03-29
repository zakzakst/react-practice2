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
// import HookReducerInit from './chap07/HookReducerInit'
// import HookContext from './chap07/HookContext'
// import MyThemeProvider from './chap07/MyThemeProvider'
// import HookThemeButton from './chap07/HookThemeButton'
// import { RecoilRoot } from 'recoil'
// import RecoilCounter from './chap07/RecoilCounter'
// import RecoilTodo from './chap07/RecoilTodo'
// import RecoilTodoUp from './chap07/RecoilTodoUp'
// import HookMemo from './chap07/HookMemo'
// import HookTransition from './chap07/HookTransition'
// import HookDeferred from './chap07/HookDeferred'
// import HookDeferredTransition from './chap07/HookDeferredTransition'
import HookCustom from './chap07/HookCustom'

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

// root.render(
//   <HookReducerInit init={0} />
// )

// root.render(
//   <HookContext />
// )

// root.render(
//   <MyThemeProvider>
//     <HookThemeButton />
//   </MyThemeProvider>
// )

// root.render(
//   <RecoilRoot>
//     <RecoilCounter />
//   </RecoilRoot>
// )

// root.render(
//   <RecoilRoot>
//     <RecoilTodo />
//   </RecoilRoot>
// )

// root.render(
//   <RecoilRoot>
//     <RecoilTodoUp />
//   </RecoilRoot>
// )

// root.render(
//   <HookMemo />
// )

// root.render(
//   <HookTransition />
// )

// root.render(
//   <HookDeferred />
// )

// root.render(
//   <HookDeferredTransition />
// )

root.render(
  <HookCustom />
)

// #endregion

reportWebVitals();