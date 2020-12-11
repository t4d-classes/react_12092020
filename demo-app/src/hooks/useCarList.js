import { useState } from 'react';

export function useCarList(initialCars) {

  const [cars, setCars] = useState(initialCars);

  const appendCar = (newCar) => {
    setCars([
      ...cars,
      {
        ...newCar,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      },
    ]);
  };

  const replaceCar = (car) => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = [...cars];
    newCars[carIndex] = car;
    setCars(newCars);
  }

  const removeCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
  }

  return {
    cars, appendCar, replaceCar, removeCar,
  };


}