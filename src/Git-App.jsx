
import React from 'react';
import { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GitGrid } from './components/GitGrid';

export const GitApp = () =>{

    const [categories, setCategories] = useState([
        'one Punch'
    ]);

    // funcion para insertar una nueva categoria a mi arreglo
    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    }

    return(
        <>
            <h1>Git Expert App</h1>
            {/* invoco un componente hijo (formulario) */}
            <AddCategory
                //  setCategories={setCategories}
                onNewCategory={(event) => onAddCategory(event)}
            />
            <button onClick={onAddCategory}>Agregar</button>
        
                {categories.map( (category) => (
                            <GitGrid key={category} category={category}/>
                        ))
                }
           
        </>        
    )
}