import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getDomains = async () => {
    const response = await axios.get(`${API_BASE_URL}/domains`);
    if (!response.data['hydra:member']) {
        throw new Error('Unexpected API response format');
    }
    return response.data['hydra:member'];
};