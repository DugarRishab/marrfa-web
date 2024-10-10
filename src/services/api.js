import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;


const api = axios.create({
	baseURL: API_URL,
	// baseURL: "https://api.marrfa.com/api/v1",
	withCredentials: true,
});

export const loginAuth = (payload) => api.post("./auth/login", payload);
export const signupAuth = (payload) => api.post("./auth/signup", payload);
export const logoutAuth = () => api.get("./auth/logout");

export const viewProperties = (query) => api.get(`./property/?${query}`);
export const createProperty = (payload) =>
	api.post("./property/", payload, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
export const viewProperty = (id) => api.get(`./property/${id}`);

export const searchProperties = (query) => api.get(`./property/search?${query}`)