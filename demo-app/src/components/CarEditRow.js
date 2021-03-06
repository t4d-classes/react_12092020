import React, { useState } from 'react';
import PropTypes from 'prop-types';

const nanToValue = (num) => isNaN(num) ? '' : num;

export function CarEditRow(props) {

  const [
    carForm,
    setCarForm,
  ] = useState({
    make: props.car.make,
    model: props.car.model,
    year: props.car.year,
    color: props.car.color,
    price: props.car.price,
  });

  const change = (e) => {

    setCarForm({
      ...carForm,
      [e.target.name]: e.target.type === 'number'
        ? parseFloat(e.target.value) : e.target.value,
    });

    // const fieldPropNameUpdate = e.target.name; // make

    // const newCarForm = {
    //   // ...carForm
    //   make: carForm.make,
    //   model: carForm.model,
    //   year: carForm.year,
    //   color: carForm.color,
    //   price: carForm.price,
    // };

    // // newCarForm.make = e.target.value;
    // newCarForm[fieldPropNameUpdate] = e.target.value;

    // setCarForm(newCarForm);

  };

  const saveCar = () => {
    props.onSaveCar({
      ...carForm,
      id: props.car.id,
    });
  };

  return (
    <tr>
      <td>{props.car.id}</td>
      <td><input type="text" name="make"
        value={carForm.make} onChange={change} /></td>
      <td><input type="text" name="model"
        value={carForm.model} onChange={change} /></td>
      <td><input type="number" name="year"
        value={nanToValue(carForm.year)} onChange={change} /></td>
      <td><input type="text" name="color"
        value={carForm.color} onChange={change} /></td>
      <td><input type="number" name="price"
        value={nanToValue(carForm.price)} onChange={change} /></td>
      <td>
        <button type="button" onClick={saveCar}>Save</button>
        <button type="button" onClick={props.onCancelCar}>Cancel</button>
      </td>
    </tr>
  );

}

CarEditRow.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.number,
  }),
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};