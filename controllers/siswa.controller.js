 const Siswa = require('../models').Siswa;
 const Telepon = require('../models').Telepon;
 const Kelas_siswa = require('../models').Kelas_siswa;
 const Hobi = require('../models').Hobi;

const siswa = {}

siswa.add_siswa = (req, res, next) =>{
    
    //res.send(req.method + " test suksess")
    Siswa.create({  
	  nisn: req.body.nisn,
	  nama_siswa: req.body.nama_siswa,
	  tanggal_lahir: req.body.tanggal_lahir,
	  jenis_kelamin: req.body.jenis_kelamin,
	  id_kelas: req.body.id_kelas,
	  telepon: req.body.telepon,
	  hobi: req.body.hobi
	},{
		include:[{
			model:Telepon,
			as:'telepon'
		},{
			model: Hobi,
			as:'hobi'
		}]
	}).then((siswa) => {		
		res.send(siswa);
	}).catch(next) 
}


// FETCH all Customers
siswa.findAll = (req, res, next) => {
	//res.send(req.method+ ' Fetch classroom successfully')
	   Siswa.findAll({
	 	include : [{
	 		model: Telepon,
	 		as: 'telepon'
	 	},{
	 		model:Kelas_siswa,
	 		as:'kelas'
	 	},{
	 		model:Hobi,
	 		as:'hobi'
	 	}],
	 	order:[
	 	  ['created_at','DESC'],
	 	]
	 }).then((siswa) => {
	      res.status(200).send(siswa);
	}).catch(next) 
};


siswa.findById = (req, res, next )=>{
    Siswa.findById(req.params.id,{
		  include:[{
		  	 model: Telepon,
		  	 as: 'telepon'
		  },{
		  	model:Kelas_siswa,
		  	as:'kelas'
		  },{
		  	model:Hobi,
		  	as:'hobi'
		  }]
	}).then((siswa) => {
		if (!siswa) {
            return res.status(404).send({
            	message: 'Siswa tidak ada'
            })
		} 
		res.send(siswa);
	}).catch(next)  
};

siswa.update = (req, res,next) => {
	 const id = req.params.id;
	Siswa.findById(id,{
	    include: [{
	    	model: Telepon,
	    	as:'telepon'
	    },{
	    	model:Hobi,
	    	as:'hobi'
	    },{
	    	model:Kelas_siswa,
	    	as:'kelas'
	    }] 
	}).then((siswa) => {
         if (!siswa) {
               return res.status(404).send({
                message: 'Siswa dengan id = '+ id+ 'tidak ditemukan',
            });
         }
           return siswa.update({
         		  nisn: req.body.nisn,
	              nama_siswa: req.body.nama_siswa,
	              tanggal_lahir: req.body.tanggal_lahir,
	              jenis_kelamin: req.body.jenis_kelamin,
	              telepon: req.body.telepon,
	              id_kelas: req.body.id_kelas,
	              hobi: req.body.hobi,
         	   }).then(()=> res.status(200).send(siswa))
	       }).catch(next) 
};


siswa.delete = (req, res,next) => {
	//res.send(req.method+ ' Delete classroom with  successfully')
	const id = req.params.id;
	Siswa.findById(id).then((siswa) => {
       if (!siswa) {
       	   return res.status(400).send({
       	   	 message: 'Siswa kgk ada'
       	   });
       } 

      return siswa.destroy({
      	          where: { id: id }
	             }).then(()=> res.status(200).send({message:'Siswa dgn id = '+ id + 'berhasil dihapus' }))
                   .catch((error)=> res.status(400).send(error)); 
	            }).catch(next) 
};


module.exports = siswa;