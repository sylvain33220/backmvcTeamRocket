const express = require("express");

const router = express.Router()

const {getAll} = require('../controller/movieController')

router.get('/', getAll)
// router.get('/', (req,res) => {
//     res.status(200).json('je suis sur http://localhost:4242/api/movie')
// })

module.exports = router;