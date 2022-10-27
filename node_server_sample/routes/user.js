const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('user');
});

router.get('/info', (req, res) => {
    res.send('userinfo');
});

router.get('/info/:id', (req, res) => {
    res.send('userinfo' + req.params.id);
});

module.exports = router;
