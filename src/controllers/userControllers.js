const database = require ("../../database");

const getUsers = (req, res) => {
  database.query("select * from users")
  .then (([users]) => { res.json(users);
  })
  .catch ((err) => { 
    console.error (err);
    res.senStatus(500);
  })
};
  


const getUserById = (req, res) => { 
  const id = parseInt (req.params.id); 

  database.query("select * from users where id=?", [id])
  .then(([[users]]) => { 
    if (users != null){ 
      res.json(users);
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
  getUsers,
  getUserById,
};
