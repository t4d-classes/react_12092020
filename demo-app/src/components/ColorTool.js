import React from 'react';
import PropTypes from 'prop-types';

export function ColorTool(props) {

  return (
    <>
      <header>
        <h1>{props.headerText}</h1>
      </header>
      <ul>
        {props.colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
    </>
  )
}

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  headerText: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    hexcode: PropTypes.string,
  })).isRequired,
};