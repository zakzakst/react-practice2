import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// 4-1
// import StateForm from './chap04/StateForm'
// import StateFormUC from './chap04/StateFormUC'
// import FormTextarea from './chap04/FormTextarea'
// import FormSelect from './chap04/FormSelect'
// import FormList from './chap04/FormList'
// import FormRadio from './chap04/FormRadio'
// import FormCheck from './chap04/FormCheck'
// import FormCheckMulti from './chap04/FormCheckMulti'
// import FormFile from './chap04/FormFile'
// import StateNest from './chap04/StateNest'
// import StateNestImmer from './chap04/StateNestImmer'
import StateNestImmer2 from './chap04/StateNestImmer2'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// #region ■■ 4-1 ■■
// root.render(
//   <StateForm />
// )

// root.render(
//   <StateFormUC />
// )

// root.render(
//   <FormTextarea />
// )

// root.render(
//   <FormSelect />
// )

// root.render(
//   <FormList />
// )

// root.render(
//   <FormRadio />
// )

// root.render(
//   <FormCheck />
// )

// root.render(
//   <FormCheckMulti />
// )

// root.render(
//   <FormFile />
// )

// root.render(
//   <StateNest />
// )

// root.render(
//   <StateNestImmer />
// )

root.render(
  <StateNestImmer2 />
)

// #endregion

reportWebVitals();