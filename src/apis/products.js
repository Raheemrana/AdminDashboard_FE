import axios from 'axios';

export const getproductsDropdown = (response, error) =>
    axios.get('http://localhost:8000/products-dropdown')
    .then((res) =>{
        var data = res.data
        data.unshift({key: 0, value: "Select Product"})
        response(data)
    })
    .catch((err) =>{
        error(err)
    })

export const getProducts = (response, error) =>
    axios.get('http://localhost:8000/products')
    .then((res) =>{
        response(res.data)
    })
    .catch((err) =>{
        error(err)
    })