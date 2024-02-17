import React, { Suspense } from 'react'
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
// import QueryBasic from './chap06/QueryBasic'
import { ErrorBoundary } from 'react-error-boundary'
import QuerySuspense from './chap06/QuerySuspense'

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

// const cli = new QueryClient()
// root.render(
//   <QueryClientProvider client={cli}>
//     <QueryBasic />
//   </QueryClientProvider>
// )

const cli = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})
root.render(
  <Suspense fallback={<p>Loading...</p>}>
    <ErrorBoundary fallback={<p>エラーが発生しました。</p>}>
      <QueryClientProvider client={cli}>
        <QuerySuspense />
      </QueryClientProvider>
    </ErrorBoundary>
  </Suspense>
)

// #endregion

reportWebVitals();