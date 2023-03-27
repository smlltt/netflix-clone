import axios from "axios";
import { FieldValues } from "react-hook-form";
import { StandardQueryParams } from "@/api/types";

export const registerUser = (data: FieldValues) =>
  axios.post("/api/register", data);
export const fetchUser = () => axios.get("/api/user");

export const fetchRandomMovie = () => axios.get("/api/random");

export const fetchMovies = (queryParams: StandardQueryParams) =>
  axios.get("/api/movies", { params: queryParams });
