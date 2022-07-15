import React from 'react'
import useState from 'react';

const Main = () => {
    const name = "Kennybiscuit";

    const [name, setName] = useState('Kenny');

    const handleClick = () => {
        alert('you clicked me');
    }

    return (
        <main>
            <p> Hello <b>{name}</b> its nice to see you!</p>
            <button> onClick={handleClick}</button>
        </main>
    )
}

export default Main
