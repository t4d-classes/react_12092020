import React from 'react';
import PropTypes from 'prop-types';

export function ColorList(props) {

  return (
    <ul>
      {props.colors.map(color =>
        <li key={color.id}>{color.name}</li>)}
    </ul>
  );

}

ColorList.defaultProps = {
  colors: [],
};

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    hexcode: PropTypes.string,
  })).isRequired,
};