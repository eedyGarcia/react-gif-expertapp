import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['The Boys']);
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            
            <ol>
                {categories.map( (category,i)=>
                    <GifGrid
                    key={category}
                     category={category} />
                )}
            </ol>
        </>
    );
}

export default GifExpertApp;
