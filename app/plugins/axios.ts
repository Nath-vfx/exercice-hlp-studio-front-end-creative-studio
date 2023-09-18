import axios from "axios";
export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    let httpClient = axios.create({
        baseURL: config.public.apiUrl,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.public.apiJwt}`,
        },
    });
    return {
        provide: {
            api: httpClient,
        }
    }
});