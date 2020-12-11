import React from 'react';
import PropTypes from 'prop-types';

const colorListItem = (props) => (color) => {
  return (
    <li key={color.id}>
      {color.name}
      <button type="button" onClick={() => props.onDeleteColor(color.id)}>X</button>
    </li>
  );
}

export function ColorList(props) {

  return (
    <ul>
      {props.colors.map(colorListItem(props))}
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