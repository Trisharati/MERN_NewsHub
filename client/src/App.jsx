
// import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import First from './components/First'
import Register from './components/Register'
import Login from './components/Login'
import { useState } from 'react'
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import SwitchInterest from './components/SwitchInterest';
import MyCollection from './components/MyCollection';

function App() {
  
  const [showFirstComponent,setShowFirstComponent] = useState(true)
  
  
  const handleSignUp=()=>{
    setShowFirstComponent(false)
    
  }



  return (
    <>
    <ToastContainer/>
     <Router>
      <Routes>
        {showFirstComponent && 
        <Route path='/' element={<First onSignUp={handleSignUp}/>}/>}
        <Route path='/first' element={<First/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<PrivateRoute Component={Dashboard}/>}/>
        <Route path='/switchinterest' element={<PrivateRoute Component={SwitchInterest}/>}/>
        <Route path='/mycollection' element={<PrivateRoute Component={MyCollection}/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
