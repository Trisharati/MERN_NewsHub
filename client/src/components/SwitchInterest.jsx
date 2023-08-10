import React from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { updateGenre } from '../redux/NewsSlice'
import { useNavigate } from 'react-router-dom'

const SwitchInterest = () => {

    const {register,handleSubmit,reset,formState:{errors}} = useForm()

    const handleError = (errors)=>{}

    const registerOptions = {
        genre:{
            required:{
                value:true,
                message:'*Please choose new genre'
            }
        }
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let userId = localStorage.getItem('userId')
    const handleForm = async(formData)=>{
        console.log('sfadf',formData)
        let res = await dispatch(updateGenre({formData,userId}))
        console.log('new genre',res.payload)
        localStorage.setItem('genre',res.payload)
        if(res.payload){
            navigate('/dashboard')
        }
    }

  return (
    <div>
        <div>
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5" style={{backgroundColor: '#D9CCF0'}}>
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">
              <strong>Switch To a Different Genre</strong></h5>
            <form onSubmit={handleSubmit(handleForm,handleError)}>
              
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
                style={{backgroundColor:'#8C51F0'}}>
                  Let's See</button>
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

export default SwitchInterest