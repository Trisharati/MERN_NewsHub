import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { getNews, saveNews } from '../redux/NewsSlice'
import {useDispatch} from 'react-redux'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'

const Dashboard = () => {

  let [result,setResult] = useState([])

const dispatch = useDispatch()
let genre = localStorage.getItem('genre')

const fetchData = async()=>{
  let output = await dispatch(getNews(genre))
  console.log('output.paload',output.payload)
  setResult(output.payload)
  return
}
useEffect(()=>{
  fetchData() 
},[genre])

let userId = localStorage.getItem('userId')
const handleSave = async(newsId)=>{
  
  let obj
  await result.map((data)=>{
    if(data.id === newsId){
      obj = data
      return 
    }
  })
  let value = await dispatch(saveNews({obj,userId}))
  if(value.payload){
    toast.success('News saved successfully')
  }
   return
}

  return (
    <div>
      <h3 style={{marginLeft:'510px',marginTop:'10px'}}>Latest News on {genre}</h3>
<div className="card-row page-container"> {/* Add a container for the row */}
    {result &&
      result.map((data, index) => (
        <div className="card" key={index}>
          <img className="card-img-top" src={data.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
          </div>
          <div className='news'>
          <Button className="news-button save-news-button" onClick={()=>{handleSave(data.id)}}>Save News</Button>
          <Button className="news-button read-more-button">
            <Link to={data.url} target='_blank'
            style={{color:'white',textDecoration:'none'}}>Read More</Link>
            </Button>
          </div>
          
        </div>
      ))}
  </div>
    
    </div>
  )
}

export default Dashboard