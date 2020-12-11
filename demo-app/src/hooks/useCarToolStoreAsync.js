import { useState, useCallback } from 'react';
import { useListAsync } from './useListAsync';

export function useCarToolStoreAsync() {

  const [
    cars, appendCar, replaceCar, removeCar
  ] = useListAsync('http://localhost:3060/cars');

  const [editCarId, setEditCarId] = useState(-1);

  const addCar = useCallback(async (newCar) => {
    await appendCar(newCar);
    setEditCarId(-1);
  }, [appendCar]);

  const saveCar = useCallback(async (car) => {
    await replaceCar(car);
    setEditCarId(-1);
  }, [replaceCar]);

  const deleteCar = useCallback(async (carId) => {
    await removeCar(carId);
    setEditCarId(-1);
  }, [removeCar]);

  const cancelCar = () => setEditCarId(-1);

  return {
    cars, editCarId, addCar, saveCar, deleteCar, cancelCar, editCar: setEditCarId
  };
}
