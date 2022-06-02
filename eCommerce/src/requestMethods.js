import axios from "axios"
require('dotenv').config()
const KEY = process.env.REACT_APP_STRIPE;

const BASE_URL = "http://localhost:5000/api/"
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I3NWFjYmU2ODRkNzgwZjFmN2VhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDAxNzE3OCwiZXhwIjoxNjU0Mjc2Mzc4fQ.9TZMWeDmHGBJ9MVaAaRfpNP_i5XP07Mt96U5x4tNK4c"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser.accessToken;
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)


export const publicRequest = axios.create({
    baseURL: BASE_URL,
    // Authorization: KEY,

})
export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers : {token:`Bearer ${TOKEN}`},
    // Authorization: KEY,
})