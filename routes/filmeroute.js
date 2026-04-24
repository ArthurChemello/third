const router = require('express').Router();
const filmeController = require('../controllers/filmecontroller');
const { verifyToken } = require('../middlewares/auth');
const { checkRole }   = require('../middlewares/rules');

router.get('/',       verifyToken,                     filmeController.listarTodos);
router.get('/:id',    verifyToken,                     filmeController.buscarPorId);
router.post('/',      verifyToken, checkRole('admin'), filmeController.criar);
router.put('/:id',    verifyToken, checkRole('admin'), filmeController.atualizar);
router.delete('/:id', verifyToken, checkRole('admin'), filmeController.deletar);

module.exports = router;