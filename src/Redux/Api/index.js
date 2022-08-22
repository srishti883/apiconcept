

import axios from 'axios';
export const NEW_API_URL = "https://jsonplaceholder.typicode.com/"

export const HomeData = {
    fetchHomeData: async() => {
        return await axios.get(`${process.env.REACT_APP_API_URL
}posts`);
    },
}



https://uam-fe-bt3-dev.digital-asset-broker.com/middleware

axios.get(`${NEW_API_URL}/api/v1/users?role_nome=%7Brole`);
