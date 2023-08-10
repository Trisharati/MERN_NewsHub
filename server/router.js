const userController = require('./controller/userController')
const newsController = require('./controller/newsController')
const router = require('express').Router()

router.post('/register',userController.register)
router.post('/login',userController.login)
router.get('/getnews',newsController.getNews)
router.post('/updategenre/:userId',userController.updateGenre)
router.post('/savenews',userController.saveNews)
router.get('/getsavednews',userController.getSavedNews)




module.exports  =router