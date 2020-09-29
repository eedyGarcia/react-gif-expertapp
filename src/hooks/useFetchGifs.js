import {useEffect, useState} from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = function(category){
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getGifs(category) //Helpers
        .then(
            imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            }
        );
    },[category]);

    return state;
};