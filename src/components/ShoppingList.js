import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    search: "",
    filter: "All"
  });
  
  function handleSearchChange(event){
    const newObj = {...formData, [event.target.name]: event.target.value}
    setFormData(newObj)
  }
  
  const itemsToDisplay = items.filter((item) => {
    const itemNameLower = item.name.toLowerCase()
    const searchNameLower = formData.search.toLowerCase()
    
    if(formData.filter==="All"){
      if(formData.search === "") {
        return true
      } else {
      return itemNameLower.includes(searchNameLower)
      }
    } else {
      if(formData.search === "") {
        return item.category === formData.filter
      } else {
      return itemNameLower.includes(searchNameLower) && item.category === formData.filter
      }
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
