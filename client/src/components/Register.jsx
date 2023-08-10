import React from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import { userregister } from '../redux/NewsSlice'
import {useNavigate} from 'react-router-dom'


const Register = () => {

  const navigate = useNavigate()

  const {register,handleSubmit,reset,formState:{errors}} = useForm()

const dispatch = useDispatch()
  const handleForm = (formData)=>{
    console.log('form data',formData)
    dispatch(userregister({formData,navigate}))
    reset()
}
const handleError = (errors)=>{}

const registerOptions = {
    email:{
        required:{
            value:true,
            message:'*Email is required'
        }
    },
    name:{
        required:{
            value:true,
            message:'*Name is required'
        }
    },
    password:{
        required:{
            value:true,
            message:'*Password is required'
        }
    },
    genre:{
        required:{
            value:true,
            message:'*Please select genre'
        }
    }
}



  return (
    <div>
 <div style={{    backgroundColor:'#E8CF74',
                  minHeight: '100vh' }}>
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5" style={{opacity:0.7}}>
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">
              <strong>Register Yourself </strong></h5>
            <form onSubmit={handleSubmit(handleForm,handleError)}>
              <div className="form-floating mb-3">

                <input type="text" className="form-control" 
                name='email' placeholder='Email' 
                {...register('email',registerOptions.email)}/>
                 <p className='error'>{errors.email?.message}</p>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" 
                name='name' placeholder='Name'
                {...register('name',registerOptions.name)}/>
                 <p className='error'>{errors.name?.message}</p>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" 
                name='password' placeholder='Password'
                {...register('password',registerOptions.password)}/>
                 <p className='error'>{errors.password?.message}</p>
              </div>
              <div className="form-floating mb-3">
                <select name="genre"
                {...register('genre',registerOptions.genre)}>
                  <option></option>
                  <option>Technology</option>
                  <option>Health</option>
                  <option>Sports</option>
                  <option>Politics</option>
                </select>
                <p className='error'>{errors.genre?.message}</p>
              </div>
               
              <div className="d-grid">
                <button className="btn btn-login text-uppercase fw-bold" type="submit"
                style={{backgroundColor:'#D47C3D'}}>
                  Register</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Register