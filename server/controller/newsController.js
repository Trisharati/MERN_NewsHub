const axios = require('axios')


const getNews = async(req,res)=>{

    let genre = req.query.genre
    // console.log('from controller',req)
    if(genre == 'Sports'){
        var url = 'https://api.currentsapi.services/v1/latest-news?' +
        'language=en&' +
        'apiKey=zvEQpbpBOe_gKIxxxw9iKivCVo9-qBFteWPK0_7TxRdNYVBp&' + 
        'category=sports'
        var response = await axios.get(url);
        let info = response.data.news
            res.status(200).json({
                news : info
            })
    }
    else if(genre == 'Health'){
        var url = 'https://api.currentsapi.services/v1/latest-news?' +
        'language=en&' +
        'apiKey=zvEQpbpBOe_gKIxxxw9iKivCVo9-qBFteWPK0_7TxRdNYVBp&' + 
        'category=health'
        var response = await axios.get(url);
        let info = response.data.news
            res.status(200).json({
                news : info
            })
    }
    else if(genre == 'Technology'){
        var url = 'https://api.currentsapi.services/v1/latest-news?' +
        'language=en&' +
        'apiKey=zvEQpbpBOe_gKIxxxw9iKivCVo9-qBFteWPK0_7TxRdNYVBp&' + 
        'category=technology'
        var response = await axios.get(url);
        let info = response.data.news
            res.status(200).json({
                news : info
            })
    }
  
    else if(genre == 'Politics'){
        var url = 'https://api.currentsapi.services/v1/latest-news?' +
        'language=en&' +
        'apiKey=zvEQpbpBOe_gKIxxxw9iKivCVo9-qBFteWPK0_7TxRdNYVBp&' + 
        'category=politics'
        var response = await axios.get(url);
        let info = response.data.news
            res.status(200).json({
                news : info
            })
    }
  
    
}

module.exports ={getNews}