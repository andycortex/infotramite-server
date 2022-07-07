const { Router } = require('express');
const { 
    GetAllUser, 
    CreateUser,
    UpdateUser, 
    DeleteUser, 
    GetById } = require('../controllers/user.controller');

const router = Router();

router.get('/', GetAllUser );
router.put('/:id', GetById);
router.post('/', CreateUser);
router.patch('/', UpdateUser);
router.delete('/', DeleteUser );


module.exports = router;