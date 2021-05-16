import axios from "axios";

const instance = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
    timeout: 1000,
});

const baseQueryParams = {
    ts: process.env.REACT_APP_MARVEL_TS,
    apikey: process.env.REACT_APP_MARVEL_API_KEY,
    hash: process.env.REACT_APP_MARVEL_HASH
}

const apiGet = (url, query) => instance.get(url, {
    params: {
        ...query,
        ...baseQueryParams
    }
})

export {apiGet};
