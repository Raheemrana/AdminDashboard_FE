import axios from "axios";

export const getSalesByGender = (response, error) =>
  axios
    .get("http://127.0.0.1:8000/sales-by-gender")
    .then((res) => {
      response(res.data);
    })
    .catch((err) => {
      error(err);
    });
export const getSalesByAge = (response, error) =>
  axios
    .get("http://127.0.0.1:8000/sales-by-age-brackets")
    .then((res) => {
      response(res.data);
    })
    .catch((err) => {
      error(err);
    });
export const getSalesByMedium = (response, error) =>
  axios
    .get("http://127.0.0.1:8000/sales-by-transaction")
    .then((res) => {
      response(res.data);
    })
    .catch((err) => {
      error(err);
    });

export const getSalesByWeekdays = (response, error) =>
  axios
    .get("http://127.0.0.1:8000/sales-by-weekdays")
    .then((res) => {
      response(res.data);
    })
    .catch((err) => {
      error(err);
    });

export const getfilteredSales = (
  startDate,
  endDate,
  productId,
  categoryId,
  chartType,
  response,
  error
) =>
  axios
    .get("http://localhost:8000/sales-by-filters", {
      params: {
        startDate: startDate ? startDate : null,
        endDate: endDate,
        product_id: productId,
        category_id: categoryId,
        span: chartType,
      },
    })
    .then((res) => {
      response(res);
    })
    .catch((err) => {
      error(err);
    });
