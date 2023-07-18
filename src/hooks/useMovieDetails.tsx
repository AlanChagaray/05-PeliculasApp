import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditInterface';

interface MovieDetails {
    // isLoading : boolean;
    movieFull ?: MovieFull;
    cast : Cast[];
}

export const useMovieDetails = (id : number) => {
  
    const [state, setState] = useState<MovieDetails>({
        // isLoading : false,
        movieFull : undefined,
        cast :[]
    })

    const getMovieDetails = async() =>{

        const movieDetailPromise = await movieDB.get<MovieFull>(`/${id}`);
        const creditPromise = await movieDB.get<CreditsResponse>(`/${id}/credits`);
        
        const [ movieDetailResp , creditsResp ] = await Promise.all([ movieDetailPromise, creditPromise]);
    
        setState({
            // isLoading : true,
            movieFull : movieDetailResp.data,
            cast : creditsResp.data.cast
        })

    }

    useEffect(() => {
      getMovieDetails();
    }, [])
    
    return{
        ...state
    }
}
