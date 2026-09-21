import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDash from './components/Dashboard/EmployeeDash'
import AdminDash from './components/Dashboard/AdminDash'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  const [user, setUser] = useState(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    return (
      loggedInUser ? JSON.parse(loggedInUser).role : null
    )
  })
  const [loggedInUserData, setLoggedInUserData] = useState(()=>{
    const loggedIn = localStorage.getItem('loggedInUser')
    return loggedIn ? JSON.parse(loggedIn).loggedInUserData : null
  })
  const data = useContext(AuthContext)
  const handleLogin = (email, password, rememberMe) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      const storage = rememberMe ? localStorage : sessionStorage
      storage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (data) {
      const employees = data.employees.find((e) => {
        const employeeData = Object.values(e)[0]
        return (
          employeeData.email === email &&
          employeeData.password === password
        )
      })
      if (employees) {
        setUser('employees')
        setLoggedInUserData(employees)
        const storage = rememberMe ? localStorage : sessionStorage
        storage.setItem('loggedInUser', JSON.stringify({ role: 'employees', loggedInUserData: employees}))
      } else {
        alert('Invalid Credentials')
      }
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
  }
  return (
    <>
      {user === 'admin' ? <AdminDash handleLogout={handleLogout} /> : user === 'employees' ? <EmployeeDash userData={loggedInUserData} handleLogout={handleLogout} /> : <Login handleLogin={handleLogin} />}
    </>
  )
}

export default App
