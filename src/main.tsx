import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import ErrorBoundary from '@ui/ErrorBoundary/index.tsx'
import { store } from '@store/index.ts'
import GlobalStyle from 'global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
)
