let express = require('express');
let router = new express.Router();

//sample dummy route for checking out route
router.get('/', (req, res)=> {res.json({message: "hitting router /"})})

router.get('/posts', (req, res)=> {res.json({message: "hitting router /posts"})})

module.exports = router;