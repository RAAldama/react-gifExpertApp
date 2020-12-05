export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=AfpI7naDsfbgCVSjmMeFWtT7V2WC4dYE`;

    const ans = await fetch(url);
    const { data } = await ans.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    
    return gifs;
}