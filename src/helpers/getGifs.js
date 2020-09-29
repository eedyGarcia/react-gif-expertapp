export const getGifs = async(category)=>{
    const query = category;
    const limit = '10';
    const apiKey= 'AFWyHuxkaMBGUqkAmauon984HsFrBb8p';
    const resp  = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${query}&limit=${limit}`);
    const { data } = await resp.json(); 
    
    const gifs = data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url,
        }
    });
    return gifs;
}