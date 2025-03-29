import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import Loading from './components/Loading'

// Lazy-loaded components
const HomePage = lazy(() => import('./pages/HomePage'))
const UserList = lazy(() => import('./pages/Userlist'))
const EditUser = lazy(() => import('./pages/EditUser'))
const LoginPage = lazy(() => import('./pages/Login'))

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <AuthProvider>
        <Routes>
          <Route 
            path="/" 
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            } 
          />

          <Route 
            path="/users" 
            element={
              <ProtectedRoute element={                <Suspense fallback={<Loading />}>
              <UserList />
            </Suspense>} />

            } 
          />

          <Route 
            path="/edit/:id" 
            element={
              <ProtectedRoute element={                <Suspense fallback={<Loading />}>
              <EditUser />
            </Suspense>} />

            } 
          />

          <Route 
            path="/login" 
            element={
              <Suspense fallback={<Loading />}>
                <LoginPage />
              </Suspense>
            } 
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App