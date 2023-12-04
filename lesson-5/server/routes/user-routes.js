const {
    handleGet,
    handlePost,
    handlePut,
    handleDelete,
} = require('../controllers/user-controller');

const userRouter = require('express').Router();

userRouter.get('/get', handleGet);
userRouter.post('/post', handlePost);
userRouter.put('/put', handlePut);
userRouter.delete('/delete', handleDelete);

module.exports = userRouter;
