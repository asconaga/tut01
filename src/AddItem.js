import React from 'react'
import { useRef } from 'react';
import { IoAddSharp } from 'react-icons/io5';

const AddItem = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    let szName = e.target.addItem.value;

    szName = szName.charAt(0).toUpperCase() + szName.slice(1);

    addItem(szName);
    e.target.addItem.value = "";
  }

  const addItem = (item) => {
    const nLen = props.items.length;

    const id = nLen ? props.items[nLen - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...props.items, myNewItem];
    props.setItems(listItems);
  }

const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label>Add Item</label>
      <input ref={inputRef} autoFocus id='addItem' type='text' placeholder='Add Item' required/>
      <button type='submit' aria-label='Add Item' onClick={() => inputRef.current.focus()}>
        <IoAddSharp/>
      </button>
      
    </form>
  )
}

export default AddItem
