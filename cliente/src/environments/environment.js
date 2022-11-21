import axios from "axios";

export const base = 'http://localhost:3001/api';

const httpClient = axios.create({
    baseURL: base
})

export default httpClient;
