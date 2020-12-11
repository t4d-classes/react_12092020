import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

import { useCarList } from '../hooks/useCarList';

export function CarTool(props) {

  const {
    cars, appendCar, replaceCar, removeCar
  } = useCarList([...props.cars]);

  const [editCarId, setEditCarId] = useState(-1);

  const addCar = (newCar) => {
    appendCar(newCar);
    setEditCarId(-1);
  };

  const saveCar = (car) => {
    replaceCar(car);
    setEditCarId(-1);
  }

  const deleteCar = (carId) => {
    removeCar(carId);
    setEditCarId(-1);
  }

  const cancelCar = () => setEditCarId(-1);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};