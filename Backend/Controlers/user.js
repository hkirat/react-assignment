const user =require('../Models/User')

exports.login =(req,res)=>{
    const {email ,password} =req.body
    user.find({
        email:email,
        password:password
    }).then(result =>{
        if(result.length>0){
            res.status(200).json({
                message:"loged in successfully",
                values:result
            });
        } else{
            res.status(400).json({
            message:"wrong credentials",
            values:result

            })
            
        }
    }
    ).catch(error=>{
        res.send(error)
    })
}


exports.signup=(req,res)=>{
    const {email ,password,firstname,lastname} =req.body
    user.find({
        email:email,
        password:password
    }).then(result =>{
        if(result.length>0){
            res.status(400).json({
                message:"already a user",
                values:result
            });
        } else{
            
            const userobj =new user({
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password

            })
            userobj.save().then(result=>{
                res.json({
                    message:"account created succefully",
                    result:result
                })
            }).catch(
                error=>{
                    res.send(error)
                }
            )
            
        }
    }
    ).catch(error=>{
        res.send(error)
    })

}