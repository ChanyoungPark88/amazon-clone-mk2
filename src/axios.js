import axios from "axios"

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: "https://us-central1-clone-mk2.cloudfunctions.net/api"
})

export default instance
// https://us-central1-clone-mk2.cloudfunctions.net/api
// http://localhost:5001/clone-mk2/us-central1/api