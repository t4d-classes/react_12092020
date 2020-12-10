import React, { useState } from 'react';

export function ColorForm() {

  // array destructuring
  const [
    colorForm, // state data
    setColorForm, // a function which updates the state data and triggers a re-render
  ] = useState({ name: '', hexcode: '', } /* initial state of the form on the first render */);

  const change = (e) => {

    setColorForm({
      ...colorForm, // copy over the properties from the color form
      [e.target.name]: e.target.value, // update the one property for the field I am typing into
    });

  };

  console.log(colorForm);

  return (
    <form>
      <div>
        <label htmlFor="color-name-input">Color Name</label>
        <input type="text" id="color-name-input" name="name" value={colorForm.name} onChange={change} />
      </div>
      <div>
        <label htmlFor="color-name-input">Color Hexcode</label>
        <input type="text" id="color-name-input" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </div>
    </form>
  );

}