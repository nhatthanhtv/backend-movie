const User = require('../model/User')
const comment = require('../model/commnets')
const bcrypt =require('bcrypt')

const jwt = require('jsonwebtoken');
class authController {


    async register(req, res, next) {
        try {
            const {nameuser, password} = req.body.data

            const checkUser = await User.findOne({username: nameuser})
            if(checkUser){
                res.json({code: 1,status: 'Tài khoản đã tồn tại'})
            }else{
                const salt = await bcrypt.genSalt(10)
                const hashed = await bcrypt.hash(password, salt)
                const newUser = {
                    username: nameuser,
                    password: hashed
                }
                User.create(newUser)
                    .then(data =>res.json(data))

            }
        }catch(err) {
        }
    }
    
    async login(req, res, next) {
        try {  
        const {nameuser, password} = req.body.data
            const user = await User.findOne({username: nameuser})
            if(!user) {
                res.status(404).json('Sai tên đăng nhập')
            }
            const validPassword = await bcrypt.compare(password, user.password)
            if(!validPassword) {
                res.status(404).json('Sai mật khẩu')
            }
            if(user, validPassword) {
            const accessToken = jwt.sign({
                    id: user.id,
                    admin: user.admin,
                    username: user.username
                },process.env.JWT_KEY,
                {expiresIn: '1d'})
                const {password, ...other} = user._doc
                res.status(200).json({other, accessToken})
            }
            
        }catch(err) {
        }
    }
    verifyToken(req, res, next){
        const token = req.body.token
        jwt.verify(token, process.env.JWT_KEY, (err, user)=>{
            if(err) {
                res.status(403).json({status:'token sai',usename:''})
            }
            res.json(user)

        })
    }
    getAllUser(req, res, next){
        if(req.body.key) {
            User.find({})
                .then(AllUser =>{
                 const data =   AllUser.map(user =>{
                   return {
                        _id: user._id,
                        username: user.username,
                        admin: user.admin,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt

                    }
                    
                 } )
                    res.json(data)
                })
        }
    }
    getallcomment(req, res, next){
        if(req.body.key) {
            comment.find({})
                .then(allComment => res.json(allComment))
        }
    }
}
module.exports = new authController