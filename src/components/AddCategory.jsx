
import React, { useState } from 'react';

export const AddCategory = ({onNewCategory}) =>{

    const [InputValue, setInputValue] = useState('One Punch');   

    const InputChange = ({target}) =>{
        // capturo el nuevo valor desde el input
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); // que no se refresque el navegador
        // elimino los espacios en blanco
        if(InputValue.trim().length <= 1) return;
        //setCategories(categories => [InputValue, ...categories]);
        onNewCategory( InputValue.trim()); // inserto el valor limpio, sin espacios
        // limpio caja de texto
        setInputValue('');
    }

    return(
        <form onSubmit={onSubmit}>
            <input type="text"
            placeholder="buscar gifs" 
            value={InputValue}
            onChange={InputChange}
            />
        </form>
    )
}