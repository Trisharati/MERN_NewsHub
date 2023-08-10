import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getSavedNews } from '../redux/NewsSlice'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const MyCollection = () => {

 let [news,setNews] = useState([])
 const dispatch = useDispatch()

 let userId = localStorage.getItem('userId')
let getData = async()=>{
  let value = await dispatch(getSavedNews(userId))
  setNews(value.payload)
  return
}

useEffect(()=>{
  getData()
},[])

  console.log('from new',news)
  return (
    <div>
      {news.length ? (<h3 style={{marginLeft:'510px'}}>Your Collection</h3>) : 
      (<h5 style={{marginLeft:'510px'}}>No Items in your collection</h5>)}
<div className="card-row page-container"> {/* Add a container for the row */}
    {news &&
      news.map((data, index) => (
        <div className="card" key={index}>
          <img className="card-img-top" src={data.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
          </div>
          <div className='news'>
          <Button className="news-button" 
          style={{marginLeft:'20px'}}>
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

export default MyCollection