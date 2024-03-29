const { Router } = require('express');
const validateJWT = require('../middlewares/validateJWT');

// // const authMiddleware = require('../middlewares/auth.middlewares');
const categoryController = require('../controllers/category.controller');

const categoryRouter = Router();

// // requisito 03
categoryRouter.post('/categories', validateJWT, categoryController.createCategoryController);
categoryRouter.get('/categories', validateJWT, categoryController.getAllCategoryController);
// categoryRouter.post('/user', userController.createUserController);

module.exports = categoryRouter;