const {findAll} = require("../model/movieModel")


const getAll = async (req,res) => {
    // res.status(200).json("je suis sur la route http://localhost:4242/api/movie et je suis dans le controller")
    try {
        const movies = await findAll()
        res.status(200).json(movies)     
    } catch (error) {
        res.sendStatus(500);
    }
    
}


module.exports = {getAll}