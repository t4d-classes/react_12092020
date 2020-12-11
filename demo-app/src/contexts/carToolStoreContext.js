import { createContext, useContext } from 'react';

import { useCarToolStoreAsync } from '../hooks/useCarToolStoreAsync';

const carToolStoreContext = createContext();

export function CarToolStoreProvider(props) {

  return (
    <carToolStoreContext.Provider value={useCarToolStoreAsync()}>
      {props.children}
    </carToolStoreContext.Provider>
  );
}

export function useCarToolStoreContext() {
  return useContext(carToolStoreContext);
}