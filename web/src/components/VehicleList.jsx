import React, { useEffect } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody, CircularProgress
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllVehicles, updateStatus } from '../redux/vehicleSlice';
import VehicleItem from './VehicleItem';

const VehicleList = () => {
  const dispatch = useDispatch();
  const { vehicles, loading, error } = useSelector(state => state.vehicles);

  useEffect(() => {
    dispatch(fetchAllVehicles());
  }, [dispatch]);

  const handleUpdate = (id, status) => {
    dispatch(updateStatus({ id, status }));
  };

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error}</p>;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Vehicle</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {vehicles.map(vehicle => (
          <VehicleItem key={vehicle.id} vehicle={vehicle} onUpdate={handleUpdate} />
        ))}
      </TableBody>
    </Table>
  );
};

export default VehicleList;
