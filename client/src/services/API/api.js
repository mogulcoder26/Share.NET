import axios from "axios";


const API_URL = 'http://localhost:6969';


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
