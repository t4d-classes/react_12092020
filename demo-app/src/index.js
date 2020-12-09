import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld } from './components/HelloWorld';
import { CarTool } from './components/CarTool';

ReactDOM.render(
  // React.createElement(React.Fragment, null,
  //   React.createElement(HelloWorld),
  //   React.createElement(CarTool));
  <>
    <HelloWorld />
    <CarTool />
  </>,
  document.querySelector('#root'),
);


