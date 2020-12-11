import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

import { useList } from '../hooks/useList';


export function ColorTool(props) {

  const [colors, appendColor, , removeColor] = useList([...props.colors]);

  return (
    <>
      <ToolHeader headerText={props.headerText} />
      <ColorList colors={colors} onDeleteColor={removeColor} />
      <ColorForm buttonText="Add" onSubmitColor={appendColor} />
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