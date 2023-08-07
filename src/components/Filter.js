import React from "react";

function Filter({ search, onSearchChange}) {
  return (
    <div className="Filter">
      <input type="text" name="search" value={search} placeholder= "Search..." onChange={e=>onSearchChange(e)}/>
      <select name="filter" onChange={onSearchChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
