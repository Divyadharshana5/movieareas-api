import { Schema, model } from "mongoose";

//Write the schema
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true, // Ensure title is unique
  },
  desc: {
    type: String,
    required: true,
    unique: true, // Ensure desc is unique
  },
});

//Create your model
const Movie = model("Movie", schema);
export default Movie;
