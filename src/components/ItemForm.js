import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })
  

  function handleFormChange(event){
    const newItemObj = {...formData, [event.target.name]: event.target.value, id: uuid()}
    setFormData(newItemObj)
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={e=>onItemFormSubmit(e, formData)}>Add to List</button>
    </form>
  );
}

export default ItemForm;
