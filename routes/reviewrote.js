const router = require('express').Router();
const reviewController = require('../controllers/reviewcontroller');
const { verifyToken } = require('../middlewares/auth');

router.get('/',       verifyToken, reviewController.listarTodos);
router.get('/:id',    verifyToken, reviewController.buscarPorId);
router.post('/',      verifyToken, reviewController.criar);
router.put('/:id',    verifyToken, reviewController.atualizar);
router.delete('/:id', verifyToken, reviewController.deletar);

module.exports = router;