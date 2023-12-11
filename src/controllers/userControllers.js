const database = require ("../../database");


//Méthose GET//
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

//METHODE POST// 

const postUser = (req, res) => { 
  const { firstname, lastname, email, city}=req.body;

  database.query ("insert into users (firstname,lastname,email,city) values (?,?,?,?)",
  [firstname, lastname, email, city ]
  )
  .then (([result]) => { 
    res.status(201).send({id:result.insertId});
  })
  .catch((err) => { 
    console.error(err);
    res.sendStatus(500);
  });
};



module.exports = {
  getUsers,
  getUserById, 
  postUser,

};
