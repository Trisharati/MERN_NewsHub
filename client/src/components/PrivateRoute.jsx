import React from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import Navbar from './Navbar'

const PrivateRoute = (props) => {
const {Component} = props
const userId = localStorage.getItem('userId')
const navigate = useNavigate()




const logout = ()=>{
    localStorage.clear()
    navigate('/first')
}


const getExpTime = localStorage.getItem('tokenExpTime')
const currentTime = Date.now()
const timeRemaining = getExpTime - currentTime

if(currentTime > getExpTime){
  logout()
}
else{
    setTimeout(logout,timeRemaining)
}


if(!userId){
  navigate('/first')
  toast.warning('You have been logged out')
  }
  else{
      console.log('token available')
  }
  return (
    <div>
        <Navbar/>
        <Component/>
    </div>
  )
}

export default PrivateRoute