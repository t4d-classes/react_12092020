import { createContext, useContext } from 'react';

import { useCarToolStore } from '../hooks/useCarToolStore';

const carToolStoreContext = createContext();

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 100000 },
];

export function CarToolStoreProvider(props) {

  return (
    <carToolStoreContext.Provider value={useCarToolStore(carList)}>
      {props.children}
    </carToolStoreContext.Provider>
  );

}

// export function CarToolStoreConsumer(props) {

//   const PresentationalComponent = props.component;

//   return (
//     <carToolStoreContext.Consumer>
//       {store => <PresentationalComponent {...store} />}
//     </carToolStoreContext.Consumer>
//   )
// }

export function useCarToolStoreContext() {
  // returns the value from the context
  return useContext(carToolStoreContext);
}