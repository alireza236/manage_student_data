var express = require('express');
var router = express.Router();

const siswa = require('../controllers').siswa;
const user = require('../controllers').user;

/* GET siswa listing. */

router.post('/siswa',siswa.add_siswa);
router.get('/siswa',siswa.findAll);
router.get('/siswa/:id',siswa.findById);
router.put('/siswa/:id',siswa.update);
router.delete('/siswa/:id',siswa.delete);

router.post('/user',user.create);
router.get('/user',user.findAll);

module.exports = router;



 


 