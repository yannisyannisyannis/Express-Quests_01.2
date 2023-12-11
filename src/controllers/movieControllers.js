const database = require ("../../database");

const getMovies = (req, res) => {
  database.query("select * from movies")
  .then (([movies]) => { res.json(movies);
  })
  .catch ((err) => { 
    console.error (err);
    res.senStatus(500);
  })
};
  


const getMovieById = (req, res) => { 
  const id = parseInt (req.params.id); 

  database.query("select * from movies where id=?", [id])
  .then(([[movies]]) => { 
    if (movies != null){ 
      res.json(movies);
    }
    else { 
      res.sendStatus(400);
    }
  })
  .catch((err) => { 
    console.error (err);
    res.sendStatus (500);
  });
};

module.exports = {
  getMovies,
  getMovieById,
};
