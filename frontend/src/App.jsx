import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Employee from './Employee'
import Profile from './Profile'
import Home from './Home'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'
import Start from './start'
import Employeelogin from './Employeelogin'
import EmployeeDetail from './EmployeeDetail'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/employee' element={<Employee />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/create' element={<AddEmployee />}></Route>
          <Route path='/employeeEdit/:id' element={<EditEmployee />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/start' element={<Start />}></Route>
        <Route path='/employeeLogin' element={<Employeelogin />}></Route>
        <Route path='/employeedetail/:id' element={<EmployeeDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
