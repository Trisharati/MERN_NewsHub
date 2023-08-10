import axios from 'axios'

const url='https://mern-news-hub.onrender.com'

export const register = (input)=>axios.post(`${url}/register`,input)
.then((res)=>{
    return res.data
}).catch((err)=>{
    return err.response.data
    
})
export const login = (input)=>axios.post(`${url}/login`,input)
.then((res)=>{
    return res.data.userInfo
}).catch((err)=>{
    console.log('error from api',err)
    return err.response.data
    
})
export const getnews = (genre)=>axios.get(`${url}/getnews`,
{
    params:{genre:genre}
})
.then((res)=>{
    return res.data.news
}).catch((err)=>{
    console.log('error from api',err)
    return err.response.data
    
})
export const updategenre = (input,userId)=>axios.post(`${url}/updategenre/${userId}`,input)
.then((res)=>{
    return res.data.genre
}).catch((err)=>{
    console.log('error from api',err)
    return err.response.data
    
})
export const savenews = (obj,userId)=>axios.post(`${url}/savenews`,
    {news:obj,
    userId:userId})
.then((res)=>{
    return res.data.info
}).catch((err)=>{
    console.log('error from api',err)
    return err.response.data
    
})

export const getsavednews = (userId)=>axios.get(`${url}/getsavednews`,
{
    params:{userId:userId}
})
.then((res)=>{
    return res.data.collection
}).catch((err)=>{
    console.log('error from api',err)
    return err.response.data
    
})

