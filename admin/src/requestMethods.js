import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2I3NWFjYmU2ODRkNzgwZjFmN2VhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTE4NjQ1OSwiZXhwIjoxNjQ5NDQ1NjU5fQ.Zpg1vyYQs7fRivfQfAAbhmXc8MGijubsz1pxClGZwNM"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser)

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
})