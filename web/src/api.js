import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export const fetchVehicles = () => axios.get(`${API_URL}/vehicles`);
export const updateVehicleStatus = (id, status) =>
  axios.put(`${API_URL}/vehicles/${id}/status`, { status });
