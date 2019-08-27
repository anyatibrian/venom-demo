import express from 'express'
import UserClass from './routes/userRegistration'
import UserLogin from './routes/userLogin'

const router = express.Router()
const users = new UserClass()
const userLogin = new UserLogin()

router
  .route('/')
  .post(users.createUsers)
  .get(users.getAllUsers)

router
  .route('/:id')
  .get(users.getSingleUsers)
  .put(users.updateSingleUSer)
  .delete(users.deleteSingleUSer)
  
router
  .route('/login')
  .post(userLogin.loginUser)

export default router
