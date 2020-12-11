import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export function CarTool(props) {

  const [cars, setCars] = useState([...props.cars]);
  const [editCarId, setEditCarId] = useState(-1);

  const addCar = (newCar) => {
    setCars([
      ...cars,
      {
        ...newCar,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      },
    ]);
    setEditCarId(-1);
  };

  const saveCar = (car) => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = [...cars];
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  }

  const deleteCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
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