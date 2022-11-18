
import { useEffect, useState} from 'react';
import { getGifts } from '../helpers/getGifts'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Git_item } from './Git_item';



export const GitGrid = ({category}) => {

  // // para cambiar el estado
  // const [Images, setImages] = useState([]);

  // const getImages = async() => {
  //     const newImages = await getGifts(category);
  //     setImages(newImages);      
  // }

  // // Hook para que solo me ejecute la url una sola vez
  // useEffect( () => {
  //   getImages();
  // }, [])

  // Hook personalizado
  const {Images, isLoading} = useFetchGifs( category);
 
       

  return (
    <>
        <h3>{category}</h3>

        {
          isLoading && (<h2>Cargando....</h2>)          
        }

        <div className='card-grid'>
            {
                // metodo para arreglos
                Images.map( (image) => (
                  // envio las propiedades al componente git_item
                   <Git_item 
                      key={image.id} 
                      title={image.title}
                      url={image.url}
                      // para obtener todas las propiedades------{...image}
                    />
                ))
            }
        </div>
       
    </>
  )
}
