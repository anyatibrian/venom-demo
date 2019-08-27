import Users from '../../models/usersModel'
import { hashPasswords } from '../../utils/hashPasswords'
class UserClass {
  // method to create a single users
  createUsers = (req, res) => {
    // creating the object body
    const body = {
      first: req.body.first_name,
      last: req.body.last_name,
      email: req.body.email,
      password: hashPasswords(req.body.password)
    }
    // making  creating new object and saving the data
    const user = new Users(body)
    user.save((errors, user) => {
      if (errors) {
        console.log(errors)
        return res.status(400).json({
          error: 'failed to creat a new user',
        })
      }
      return res.status(201).json({
        message: 'user was created successfully',
        users: user,
      })
    })
  }
  // method to get all the users
  getAllUsers = async (req, res) => {
    await Users.find((errors, users)=>{
      if (errors){
        console.log(errors)
        return res.status(400).json({
          error:'no users available'
        })
      }else{
        return res.status(200).json({
          "message":"all the available users",
          users:users
        })
      }
    })
  }
  // method to get single users
  getSingleUsers = async (req,res) => {
    const {params:{id}} = req
    await Users.findById(id, (errors, users) => {
      if (errors){
        console.log(errors)
        }
      return res.status(200).json({
          user:users
    })
  })
}
  //method to update single users
  updateSingleUSer = async (req, res) => {
    const body = {
      first:req.body.first_name,
      last:req.body.last_name,
      email:req.body.email
    }
    const id  = {
      '_id':req.params.id
    }
    await Users.updateOne(id,body,(error, users) => {
      if (error){
        console.log(error)
      }else{
        return res.status(200).json({
          message:'your user has been activated',
          users:users
        })
      }
    })
  }
  // method delete single users
  deleteSingleUSer = async (req, res) => {
    const {params:{id}} = req
    const query = {
      _id:id
    } 
    const userDeleted = await Users.deleteOne(query).exec((errors)=>console.log(errors))
    if (userDeleted){
      return res.status(200).json({
        message: 'this user has been deleted successfully'
      })
    }
  }

}
export default UserClass
