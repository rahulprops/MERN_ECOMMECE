import jwt from 'jsonwebtoken'


const generateToken= (userId,res)=>{
    try{
        const token = jwt.sign({userId},process.env.JWT,{expiresIn:"1d"})
        res.cookie("token",token,{httpOnly:true,maxAge:24*60*60*1000})
    }catch(err){
        throw new Error(err)
    }
}
export default generateToken;