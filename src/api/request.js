import axios from "axios";
let inter = axios.create({
    baseURL:"/api",
    timeout:5000,
})
export default inter