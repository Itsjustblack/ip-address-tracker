import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://geo.ipify.org/api/v2/country,city",
	params: {
		apiKey: import.meta.env.VITE_SECRET_KEY,
	},
});

export default axiosInstance;
