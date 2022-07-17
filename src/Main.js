import React from 'react'
import { IoTrashBinSharp } from 'react-icons/io5';

const Main = (props) => {
    const handleCheck = (id) => {
       const listItems = props.items.slice();

        for (let i = 0; i < listItems.length; i++)
        {
            if (listItems[i].id === id)
            {
                listItems[i].checked = !listItems[i].checked;
                break;
            }
        }
        props.setItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = props.items.filter((item) => item.id !== id);   
        props.setItems(listItems);
    }

    return (
        <main>
           {props.items.length ? (
                <ul>
                    {props.items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
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
