import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://59a8-105-163-156-237.ngrok-free.app',
    headers: {
        'ngrok-skip-browser-warning': true,
        'Content-Type': 'multipart/form-data'
    }
});

export default instance;