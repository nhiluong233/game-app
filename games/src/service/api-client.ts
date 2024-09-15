import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'cfc67336c0ad496aab4542d0f8277d10'
    }
})

