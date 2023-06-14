var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Front e Back conectados back port 9000 e front pot 3000');
});

module.exports = router;