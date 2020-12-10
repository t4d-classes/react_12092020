import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';


export function ColorTool(props) {

  const [ colors, setColors ] = useState([ ...props.colors ]);

  const addColor = (newColor) => {

    setColors([
      ...colors,
      {
        ...newColor,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      },
    ]);


  }

  return (
    <>
      <ToolHeader headerText={props.headerText} />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add" onSubmitColor={addColor} />
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