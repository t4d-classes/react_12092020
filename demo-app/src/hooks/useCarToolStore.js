import { useState } from 'react';
import { useList } from './useList';

export function useCarToolStore(initialCars) {

  const [
    cars, appendCar, replaceCar, removeCar
  ] = useList(initialCars);

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

  return {
    cars, editCarId, addCar, saveCar, deleteCar, cancelCar, editCar: setEditCarId
  };
}

}