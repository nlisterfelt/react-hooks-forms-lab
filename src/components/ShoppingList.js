import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [searchData, setSearchData] = useState({
    search: "",
    filter: "All"
  });
  
  function handleSearchChange(event){
    const newObj = {...searchData, [event.target.name]: event.target.value}
    setSearchData(newObj)
  }
  
  const itemsToDisplay = items.filter((item) => {
    const itemNameLower = item.name.toLowerCase()
    const searchNameLower = searchData.search.toLowerCase()
    
    if(searchData.filter==="All"){
      return searchData.search === "" ? true : itemNameLower.includes(searchNameLower)
    } else {
      if(searchData.search === "") {
        return item.category === searchData.filter
      } else {
      return itemNameLower.includes(searchNameLower) && item.category === searchData.filter
      }
    }
  });
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={searchData.search} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
