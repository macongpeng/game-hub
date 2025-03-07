import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5f5571252b764897a3c9efa28e47119f'
    }
})