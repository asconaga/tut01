import React from 'react'
import {useState} from 'react';

const Main = () => {
    const [s_name, s_setName] = useState('Kenny');

    const handleClick = () => {
        const newName = s_name === "Kenny" ? "Biscuit" : "Kenny";    

        s_setName(newName);
    }

    return (
        <main>
            <p> Hello <b>{s_name}</b> its nice to see you!</p>
            <button onClick={handleClick}>Click Me!</button>
        </main>
    )
}

export default Main
