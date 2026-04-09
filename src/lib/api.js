import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getDomains = async () => {
    const response = await axios.get(`${API_BASE_URL}/domains-`);
    if (!response.data['hydra:member']) {
        throw new Error('Unexpected API response format');
    }
    return response.data['hydra:member'];
};

export const createAccount = async (address, password) => {
    const response = await axios.post(`${API_BASE_URL}/accounts`, { address, password });
    return response.data;
};

export const getToken = async (address, password) => {
    const response = await axios.post(`${API_BASE_URL}/token`, { address, password });
    if (!response.data.token) {
        throw new Error('Failed to retrieve token');
    }
    return response.data.token;
};

export const getMessages = async (token) => {
    const response = await axios.get(`${API_BASE_URL}/messages`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.data['hydra:member']) {
        throw new Error('Unexpected API response format for messages');
    }
    return response.data['hydra:member'];
};

export const getMessageContentById = async (id, token) => {
    const response = await axios.get(`${API_BASE_URL}/messages/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};