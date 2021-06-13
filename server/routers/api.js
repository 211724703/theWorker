const router = require('express').Router()
const user = require('../controller/userControll')


router.post('/checkPermission/:email/:password', user.checkPermission);
router.get('/getAllEmployed', user.getAllEmployed);
route.get('/getEmployedById/:userId',user.getEmployedById);
router.post('/setNewEmployed', user.setNewEmployed)
router.post('/updateEmployed/:id', user.updateEmployed)



module.exports = router