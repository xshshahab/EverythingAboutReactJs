import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const getApi = () => {
    return api.get("/posts");
}

export const postApi = (data) => {
    return api.post("/posts", data);
}

export const putApi = (id, data) => {
    return api.put(`/posts/${id}`, data);
}

export const deleteApi = (id) => {
    return api.delete(`/posts/${id}`);
}
