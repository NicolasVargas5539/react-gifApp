import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Apex']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;  //validacion para que no se repita.

        // categories.push(newCategory);
        setCategories([newCategory, ...categories]) //1ra Forma
        // setCategories(cat => ['Naruto', ...cat])
    }

    return (
        <>
            {/* Titulo */}
            <h1>Busqueda de Gifs</h1>

            {/* Input */}
            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* Listado de Gif's */}
            {categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category}/>
                ))
            }
        </>
    )
}
