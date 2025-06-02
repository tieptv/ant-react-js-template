import { createContext, useContext, useState } from 'react'
import { message } from 'antd'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (userData) => {
    // In a real app, you would make an API call here
    setUser(userData)
    message.success('Login successful!')
  }

  const logout = () => {
    setUser(null)
    message.info('Logged out successfully')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}