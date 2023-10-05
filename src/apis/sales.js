
import axios from 'axios';

export const getSalesByGender = (response, error) =>
    axios.get('http://127.0.0.1:8000/inventory')
    .then((res) =>{
        response(res)
    })
    .catch((err) =>{
        error(err)
    })

export const getfilteredSales = (startDate, endDate, productId, categoryId, chartType, response, error) =>
    axios.get('http://localhost:8000/sales-by-filters',{
        params: {
            startDate: startDate ? startDate : null,
            endDate: endDate,
            product_id: productId,
            category_id: categoryId,
            span: 'month'
        }
    })
    .then((res) =>{
        response(res)
    })
    .catch((err) =>{
        error(err)
    })
