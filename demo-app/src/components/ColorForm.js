import React, { useState } from 'react';

export function ColorForm() {

  // array destructuring
  const [
    colorForm, // state data
    setColorForm, // a function which updates the state data and triggers a re-render
  ] = useState({ name: '' } /* initial state of the form on the first render */);

  const change = (e) => {

    setColorForm({
      name: e.target.value,
    });

  };

  console.log(colorForm);

  return (
    <form>
      <div>
        <label htmlFor="color-name-input">Color Name</label>
        <input type="text" id="color-name-input" value={colorForm.name} onChange={change} />
      </div>
    </form>
  );

}