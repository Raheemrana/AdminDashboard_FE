import axios from 'axios';

export const getCategoriesDropdown = (response, error) =>
    axios.get('http://localhost:8000/categories-dropdown')
    .then((res) =>{
        var data = res.data
        data.unshift({key: 0, value: "Select Category"})
        response(data)
    })
    .catch((err) =>{
        error(err)
    })