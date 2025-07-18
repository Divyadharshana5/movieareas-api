export const MovieIndex = (req, res) => {
  res.send("Get all movies");
};

export const MovieCreate = async (req, res) => {
  // id,title,desc

  console.log(req.body);

  //Validate your data.

  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  //Successfull or error
  try {
    const movie = await newMovie.save();
  } catch (error) {}

  return res.json(req.body);

  // create the movie info.
};

export const MovieUpdate = (req, res) => {
  res.send("updates movies");
};

export const MovieDelete = (req, res) => {
  res.send("Delete all movies");
};
