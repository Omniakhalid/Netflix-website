import * as api from "../config/appConfig";
import axios from "axios";



export const signup =(user) => axios.post(api.endpoints.addUser,user);
export const signin = (user) => axios.post(api.endpoints.signIn,user);