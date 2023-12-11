const express = require("express");

const app = express();
app.use(express.json());
 
//Méthode get//
const movieControllers = require("./controllers/movieControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

// challenge users//
const userControllers = require("./controllers/userControllers");

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);

//Méthod post// 
app.post ("/api/movies", movieControllers.postMovie);

//challenge post//
app.post ("/api/users", userControllers.postUser);

module.exports = app;
