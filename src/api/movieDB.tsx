import axios from "axios";

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params : {
        api_key :'edebf8b9a8b9bcf018cb702155914272',
        Acept : 'application/json',
        lenguage : 'es-ES'
    }
})


export default movieDB;