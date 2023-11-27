const router = require('express').Router();
const userRouter = require('./user-routes');

router.get('/users', (req, res) => {
    return res.json({ data: 'test' });
});

module.exports = router;
