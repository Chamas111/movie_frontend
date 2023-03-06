import React from 'react';

function FilterMovie({ filterValueSelected }) {
  function onFilterChange(e) {
    //console.log(e.target.value);
    filterValueSelected(e.target.value);
  }
  return (
    <div>
      <select
        name='isAvailable'
        onChange={onFilterChange}>
        <option value='All'>All</option>
        <option value='Drama'>Drama</option>
        <option value='Horror'>Horror</option>
        <option value='Romance'>Romance</option>
        <option value='Crime'>Crime</option>
        <option value='Fantasy'>Fantasy</option>
        <option value='Action'>Action</option>
        <option value='War'>War</option>
        <option value='Animation'>Animation</option>
      </select>
    </div>
  );
}

export default FilterMovie;
