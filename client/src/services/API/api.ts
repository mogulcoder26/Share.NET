import axios from "axios";


const API_URL = 'https://share-net-api1.onrender.com';


async function API(data) {

    try {
       const result = await axios.post(`${API_URL}/upload`,data);
        return result.data;
    }
    catch(e){
        console.log(e.message)
    }

}

export default API
