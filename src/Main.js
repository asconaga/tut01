import React from 'react'
import {useState} from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';

const Main = () => {
    const [s_items, s_setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "Kenny"
        },
        {
            id: 2,
            checked: false,
            item: "Barker"
        },
        {
            id: 3,
            checked: false,
            item: "Teddy"
        }
    ]);

    const handleCheck = (id) => {
        const listItems = s_items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        s_setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = s_items.filter((item) => item.id !== id);
        s_setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    return (
        <main>
           {s_items.length ? (
                <ul>
                    {s_items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <IoTrashBinSharp
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    )
}

export default Main
