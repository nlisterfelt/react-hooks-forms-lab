import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName]=useState("")
  const [itemCategory, setItemCategory]=useState("")
  
  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory
  }

  function handleNameChange(event){
    setItemName(event.target.value)
  }

  function handleCategoryChange(event){
    setItemCategory(event.target.value)
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={event=>onItemFormSubmit(event, newItem)}>Add to List</button>
    </form>
  );
}

export default ItemForm;
