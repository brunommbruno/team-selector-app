import axios from "axios";

export default axios.create({
    baseURL: "http://ec2-35-178-196-40.eu-west-2.compute.amazonaws.com/api",
    header: {
        Accept: "application/json",
        Authorization: "",
    }
})