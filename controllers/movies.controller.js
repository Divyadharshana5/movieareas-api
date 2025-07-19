import Movie from "../models/movie.model.js";

export const MovieIndex = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const MovieCreate = async (req, res) => {
  // id,title,desc
  //Validate your data.

  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  //Successfull or error
  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const MovieUpdate = (req, res) => {
  res.send("updates movies");
};

export const MovieDelete = (req, res) => {
  res.send("Delete all movies");
};
