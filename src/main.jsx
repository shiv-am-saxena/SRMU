import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  Login from './pages/Login.jsx';
import  Signup from './pages/Signup.jsx';
import AuthLayout from './components/AuthLayout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login', element: <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      },
      {
        path: '/signup', element: <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)