import axios from 'axios';

export const getCustomers = (response, error) =>
    axios.get('http://localhost:8000/customers')
    .then((res) =>{
        response(res.data)
    })
    .catch((err) =>{
        error(err)
    })