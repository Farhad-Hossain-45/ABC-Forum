import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import AuthProvider from './components/AuthProvider/AuthProvider'
import {  QueryClientProvider,QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router}></RouterProvider>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
