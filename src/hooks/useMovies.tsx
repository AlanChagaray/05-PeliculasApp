import { useEffect , useState} from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    const getMovies = async() => {
        const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing'); 
        const respPopular = await movieDB.get<MovieDBMoviesResponse>('/popular'); 
        const respTopRated = await movieDB.get<MovieDBMoviesResponse>('/top_rated'); 
        const respUpcoming = await movieDB.get<MovieDBMoviesResponse>('/upcoming'); 
        setNowPlaying(respNowPlaying.data.results);
        setPopular(respPopular.data.results);
        setTopRated(respTopRated.data.results);
        setUpcoming(respUpcoming.data.results);
        setIsLoading(false);
    }

    useEffect(() => {
      getMovies();
    }, [])
    

    return {
        nowPlaying,
        popular,
        topRated,
        upcoming,
        isLoading
  }
}
