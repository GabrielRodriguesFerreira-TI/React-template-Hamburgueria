import axios from "axios";

export const client = axios.create({
    baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
})