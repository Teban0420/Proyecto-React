import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

// Un hook es una funcion que regresa algo
export const useFetchGifs = (category) => {
 
    const [Images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifts(category); 
        setImages(newImages); 
        setIsLoading(false);     
    }

    // Hook para que solo me ejecute la url una sola vez
    useEffect( () => { 
        getImages();
    }, [])

    // regreso un objeto
    return{
        Images,
        isLoading
    }
}
