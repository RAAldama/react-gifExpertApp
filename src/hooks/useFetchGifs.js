import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [data, setData] = useState({
        data: [], 
        loading: true
    });

    //Carga lo que está dentro según las condiciones, vacío es una vez cuando se carga 
    //el componente, 'category' se redibuja al cambiar category
    useEffect( () => {
        
        getGifs(category).then(imgs => {
            setData({
                data: imgs,
                loading: false
            });
        })

    }, [category]);

    return data
}