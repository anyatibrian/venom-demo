import Users from '../../models/usersModel'
import bcrypt from 'bcrypt'
class UserLogin {
  // user should login into the system for normal users
  loginUser = async(req ,res) => {
      const { first_name, password } = req.body
      await Users.findOne({first:first_name},(error, users) => {
        if(error){
          return res.json(error)
        }
        if(users){
          bcrypt.compareSync(password, users.password)
          return res.status(200).json({
          users:users
        })
      }
      })
    
  }
}
export default UserLogin