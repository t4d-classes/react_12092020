import React from 'react';
import ReactDOM from 'react-dom';

import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
import { CarToolStoreProvider } from './contexts/carToolStoreContext';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';





ReactDOM.render(
  <>
    <ColorToolStoreProvider>
      <ColorTool headerText="Color Tool" />
    </ColorToolStoreProvider>
    <CarToolStoreProvider>
      <CarTool />
    </CarToolStoreProvider>
  </>,
  document.querySelector('#root'),
);


