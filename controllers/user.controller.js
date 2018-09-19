 const User = require('../models').User;
 const Telepon = require('../models').Telepon;


 const user = {};


user.create = (req, res, next) =>{
    
    //res.send(req.method + " test suksess")
    User.create({  
	  nama: req.body.nama,
	  email: req.body.email
	}).then((user) => {		
		res.send(user);
	}).catch(next) 
}


 user.findAll = (req, res, next)=>{

 	   User.findAll({
	 	order:[['created_at','DESC']]
	 }).then((user) => {
	  res.send(user);
	}).catch(next) 
 }

 user.findById = (req, res, next )=>{
    User.findById(req.params.id).then((user) => {
		if (!user) {
            return res.status(404).send({
            	message: 'Siswa tidak ada'
            })
		} 
		res.send(user);
	}).catch(next)  
};

 module.exports = user;