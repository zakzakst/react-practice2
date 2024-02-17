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
// import MaterialMode from './chap06/MaterialMode'
// import FormMui from './chap06/FormMui'
// import QueryPre from './chap06/QueryPre'
import { QueryClient, QueryClientProvider } from 'react-query'
import QueryBasic from './chap06/QueryBasic'

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

// root.render(
//   <MaterialMode />
// )

// root.render(
//   <FormMui />
// )

// root.render(
//   <QueryPre />
// )

const cli = new QueryClient()
root.render(
  <QueryClientProvider client={cli}>
    <QueryBasic />
  </QueryClientProvider>
)

// #endregion

reportWebVitals();