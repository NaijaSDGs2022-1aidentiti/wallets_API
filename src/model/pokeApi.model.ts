//src/models/pokemon.model.ts

import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
  name: String,
  gender: String,
});

//Creating our model
export const Pokemon = mongoose.model("Pokemon", PokemonSchema);