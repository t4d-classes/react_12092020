import React from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';

export function CarTool(props) {
  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={props.cars} />
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