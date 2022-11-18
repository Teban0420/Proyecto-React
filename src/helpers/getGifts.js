
// realizamos peticion http para traer la Api 
 export const getGifts = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=lLbRBvRs2kuQnKwo2NcpKd63dBFeRw8P&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    // retorno un nuevo objeto con las propiedades que me interesan
    const gifs = data.map( img => 
        ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
    console.log(gifs);
    return gifs;
}