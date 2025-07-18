export const MovieIndex = (req, res) => {
  res.send("Get all movies");
};

export const MovieCreate = (req, res) => {
  // id,title,desc

  console.log(req.body);

  return res.json(req.body);

  // create the movie info.
};

export const MovieUpdate = (req, res) => {
  res.send("updates movies");
};

export const MovieDelete = (req, res) => {
  res.send("Delete all movies");
};
