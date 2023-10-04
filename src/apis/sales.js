
import axios from 'axios';

export const getSalesByGender = (response, error) =>
    axios.get('http://127.0.0.1:8000/inventory')
    .then((res) =>{
        response(res)
    })
    .catch((err) =>{
        error(err)
    })
