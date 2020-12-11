import React from 'react';
import PropTypes from 'prop-types';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

export function CarTable(props) {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map(car => car.id === props.editCarId
          ? <CarEditRow key={car.id} car={car} onSaveCar={props.onSaveCar} onCancelCar={props.onCancelCar} />
          : <CarViewRow key={car.id} car={car} onEditCar={props.onEditCar} onDeleteCar={props.onDeleteCar} />)}
      </tbody>
    </table>
  );


}

CarTable.defaultProps = {
  cars: [],
  editCarId: -1,
};

CarTable.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  editCarId: PropTypes.number.isRequired,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};