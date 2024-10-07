import axios from "axios";
axios.defaults.withCredentials = true;

const api = axios.create({
	baseURL: "http://localhost:8000/api/v1",
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

export const searchProperties = (query) => api.get(`./property/search?${query}`)