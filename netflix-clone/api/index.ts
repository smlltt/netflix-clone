import axios from "axios";
import { FieldValues } from "react-hook-form";

export const registerUser = (data: FieldValues) =>
  axios.post("/api/register", data);
export const fetchUser = () => axios.get("/api/user");
