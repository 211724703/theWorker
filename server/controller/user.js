const User = require('../modules/user');
const Admin = require('../modules/admin');
const jwt = require("jsonwebtoken");

//login user
const checkPermission = async (req, res) => { 
    console.log(req.params.id)
    try {
        const user = await User.findOne({ email: req.params.email, password: req.params.password })
        const token = jwt.sign({email:req.params.email,password:req.params.password},process.env.SECRET)
        getIsManager(email,password);
        if (user) { 
            res.status(200).json({LOGINUSER:user,Token:token})
        } else {
            res.status(404).send()
        }
    } catch (error) {
        res.status(500).send('error')
    }
}


    
   



//רשימת עובדים 
const getAllEmployed = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json({ allUser: user })

    } catch (error) {
        res.status(400).send('error')
    }
}


//קבלת משתמש עפ"י מזהה 
const getEmployedById = async (req,res)=>{
    try{
        let user = await User.findById(req.params.userId);
        res.status(200).send(user);    
    }catch(err){
        res.status(404).send('error user is not found: ',err);
    }
}



//הוספת משתמש חדש 
const setNewEmployed = async (req,res)=>{
    const {userId,fName,lName,password,email}=req.body;
    try{
        let user =  new User({
            userId:userId,
            fName : fName,
            lName:lName,
            password:password,
            email:email,
        })
        await user.save();
        Admin.listUser.push(user);   //להכניס את המשתמש לרשימת המשתמשים 
        let token = jwt.sign({email:email,password:password},process.env.SECRET);
        res.status(200).send({USER:user , Token:token});
    }catch(err){
        res.status(500).send('error: ',err);
    }
} 


//עידכון פרטי עובד
const updateEmployed = async (req,res )=>{
    try{
       let user = await User.findByIdAndUpdate({"userId":req.params.userId},{"user":req.body});
       await user.save();
       res.status(200).send.json({UPDATEUSER:user});
    }catch(err){
       res.status(500).send('ERORR: ',err);
    }
}






module.exports = {checkPermission,getAllEmployed,getEmployedById,setNewEmployed,updateEmployed};
