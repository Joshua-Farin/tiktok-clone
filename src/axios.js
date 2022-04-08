import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-backend6.herokuapp.com/"
});

export default instance;