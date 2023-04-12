const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Movie = require("./models/moviesModel");
const { verifyToken } = require("./auth");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/users");

// add to watchlist

app.post("/api/watchlist", verifyToken, async (req, res) => {
  const { poster_path, title, release_date, movieId } = req.body;
  const userId = req.userId;

  const checkWatchedMovie = await Movie.findOne({
    movieId: movieId,
    userId: userId,
  });
  if (checkWatchedMovie) {
    res.status(200).json({ msg: "exist" });
  } else {
    const movieWatched = await Movie.create({
      movieId,
      userId,
      poster_path,
      title,
      release_date,
    });
    res.status(200).json({ msg: "notexist" });
  }
}),
  app.post("/api/register", async (req, res) => {
    console.log(req.body);
    try {
      const newPassword = await bcrypt.hash(req.body.pass, 10);
      await User.create({
        name: req.body.name,
        email: req.body.email,
        pass: newPassword,
      });
      res.json({ status: "ok" });
    } catch (err) {
      res.json({ status: "error", error: "Duplicate email" });
    }
  }),
  app.post("/api/login", async (req, res) => {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return { status: "error", error: "Invalid login" };
    }
    const isPaswsswordValid = await bcrypt.compare(req.body.pass, user.pass);

    if (isPaswsswordValid) {
      const token = jwt.sign(
        {
          _id: user._id,
          name: req.body.name,
          email: req.body.email,
        },
        "secret123"
      );

      return res.json({ status: "ok", token: token, user: user });
    } else {
      return res.json({ status: "error", user: false });
    }
  }),
  app.get("/api/quote", async (req, res) => {
    const token = req.headers["x-accsess-token"];

    try {
      const decode = jwt.verify(token, "secret123");
      const email = decode.email;
      const user = await User.findOne({ eamil: email });

      return { status: "ok", quote: user.quote };
    } catch (error) {
      console.log(error);
      res.json({ status: "error", error: "Invaild token" });
    }
  }),
  app.post("/api/quote", async (req, res) => {
    const token = req.headers["x-accsess-token"];

    try {
      const decode = jwt.verify(token, "secret123");
      const email = decode.email;
      await User.updateOne(
        { eamil: email },
        { $set: { quote: req.body.quote } }
      );

      return { status: "ok" };
    } catch (error) {
      console.log(error);
      res.json({ status: "error", error: "Invaild token" });
    }
  }),

// get all the movies in watchlist

app.get('/getMovies',verifyToken, async (req,res)=>{
  try{

    const allMovies = await Movie.find({userId:req.userId});
    res.send({status:'ok', data: allMovies})

  }catch(error){
    console.log(error)
  }
});

 // delete movie from watchlist
  app.delete("/api/deleteMovie/:id", verifyToken, async (req, res) => {
    try {
      const { id } = req.params;
      const movie = await Movie.findOneAndDelete({movieId:id,userId:req.userId});
      if (movie) {
        res.status(200).json({ msg: "deleted successfully" });
      } else {
        res.status(404).json({ msg: "not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "internal server error" });
    }
  });


  app.listen(1337, () => {
    console.log("Server  started on 1337");
  });