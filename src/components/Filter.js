import React from "react";

function Filter({ search, onSearchChange}) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder={search} onChange={e=>onSearchChange(e)}/>
      <select name="filter" onChange={e=>onSearchChange(e)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
