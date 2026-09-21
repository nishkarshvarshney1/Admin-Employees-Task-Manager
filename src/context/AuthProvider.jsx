import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  // const { admin, employees } = getLocalStorage()
  const [employees, setEmployees] = useState(()=>{
    const storedEmployees = localStorage.getItem('employees')
    if (storedEmployees) {
      return JSON.parse(storedEmployees)
    }
    setLocalStorage()
    return JSON.parse(localStorage.getItem('employees'))
  })
  const [admin] = useState(()=>{
    const storedAdmin = localStorage.getItem('admin')
    if (storedAdmin) {
      return JSON.parse(storedAdmin)
    }
    setLocalStorage()
    return JSON.parse(localStorage.getItem('admin'))
  })
  // localStorage.clear()
  return (
    <div>
      <AuthContext.Provider value={{admin, employees, setEmployees}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
