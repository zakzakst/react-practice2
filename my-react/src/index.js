import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// import MaterialBasic from './chap06/MaterialBasic'
// import MaterialDrawer from './chap06/MaterialDrawer'
// import MaterialGrid from './chap06/MaterialGrid'
// import { CssBaseline, ThemeProvider } from '@mui/material'
// import theme from './chap06/theme'
import MaterialMode from './chap06/MaterialMode'

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

// root.render(
//   <MaterialDrawer />
// )

// root.render(
//   <MaterialGrid />
// )

// root.render(
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <MaterialBasic />
//   </ThemeProvider>
// )

root.render(
  <MaterialMode />
)

// #endregion

reportWebVitals();