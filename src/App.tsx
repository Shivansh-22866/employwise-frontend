import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import UserList from './pages/Userlist'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
