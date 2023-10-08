import axios from "axios";

export const getInventoryInsight = (response, error) =>
  axios
    .get("http://localhost:8000/inventoryinsigts")
    .then((res) => {
      response(res.data);
    })
    .catch((err) => {
      error(err);
    });

export const getInventory = (response, error) =>
  axios
    .get("http://localhost:8000/inventory")
    .then((res) => {
      response(res.data);
    })
    .catch((err) => {
      error(err);
    });
