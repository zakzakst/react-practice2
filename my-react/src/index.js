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
import FormList from './chap04/FormList'

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

root.render(
  <FormList />
)
// #endregion

reportWebVitals();