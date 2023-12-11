const database = require ("../../database");

//get method//
const getMovies = ( req, res) => {
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

//post method// 

const postMovie = (req, res) => {
  const { title, director, year, color, duration} = req.body; 



database.query("insert into movies (title, director, year,color,duration) values (?,?,?,?,?)",
[title, director, year, color, duration]
)
.then (([result]) => { 

res.status(201).send({id:result.insertId});
})
.catch ((err) => { 
  console.error(err);
  res.sendStatus(500);
});
};


module.exports = {
  getMovies,
  getMovieById,
  postMovie,
};
