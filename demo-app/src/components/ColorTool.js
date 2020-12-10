import React from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';


export function ColorTool(props) {

  return (
    <>
      <ToolHeader headerText={props.headerText} />
      <ColorList colors={props.colors} />
      <ColorForm />
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