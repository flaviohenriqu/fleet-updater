import React, { Component } from 'react';
import { MenuItem, Select, TableRow, TableCell } from '@mui/material';
import PropTypes from 'prop-types';

const statusOptions = ["Available", "In Maintenance", "Out of Service"];

class VehicleItem extends Component {
  handleChange = (event) => {
    const { onUpdate, vehicle } = this.props;
    onUpdate(vehicle.id, event.target.value);
  };

  render() {
    const { vehicle } = this.props;
    return (
      <TableRow>
        <TableCell>{vehicle.name}</TableCell>
        <TableCell>
          <Select value={vehicle.status} onChange={this.handleChange}>
            {statusOptions.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </TableCell>
      </TableRow>
    );
  }
}

VehicleItem.propTypes = {
  vehicle: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default VehicleItem;
