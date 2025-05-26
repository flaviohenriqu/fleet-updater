import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVehicles, updateVehicleStatus } from '../api';

export const fetchAllVehicles = createAsyncThunk(
  'vehicles/fetchAll',
  async () => {
    const response = await fetchVehicles();
    return response.data;
  }
);

export const updateStatus = createAsyncThunk(
  'vehicles/updateStatus',
  async ({ id, status }) => {
    const response = await updateVehicleStatus(id, status);
    return response.data;
  }
);

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState: { vehicles: [], loading: false, error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllVehicles.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicles = action.payload;
      })
      .addCase(fetchAllVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        const updated = action.payload;
        const idx = state.vehicles.findIndex(v => v.id === updated.id);
        if (idx !== -1) {
          state.vehicles[idx] = updated;
        }
      });
  }
});

export default vehicleSlice.reducer;
