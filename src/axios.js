import axios from "axios";

export default axios.create({
    baseURL: "https://www.teamselector.xyz/api",
    header: {
        Accept: "application/json",
        Authorization: "",
    }
})