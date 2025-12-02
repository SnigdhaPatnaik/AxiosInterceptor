import axios from "axios";

// Create axios instance
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

// Request Interceptor
api.interceptors.request.use((config)=>{
    console.log("Request Sent");
    // Add token automatically
    config.headers.Authorization = "Bearer sample-token-123";
    return config;
});

// Response Interceptor
api.interceptors.response.use(
    (response)=>{
        console.log("Response Received");
        return response;
    },
    (error)=>{
        console.error("API Error:",error);
        return Promise.reject(error);
    }
);
export default api;
