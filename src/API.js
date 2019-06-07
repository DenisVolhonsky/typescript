
// The application use cinema API
// https://api.themoviedb.org
import axios from 'axios';

// fetchData category should be: 'popular', 'top_rated', 'upcoming'
// fetchFind title could be any string (it is nam,e of film)

export function fetchData(category) {
    return axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=5a3dbcb0d2e3f7987f7290f6cae43c47`)
        .then(({ data, statusText })=>{
            if(data) 
                return data;
            throw new Error('Fetching error'+ statusText);
        })
        .then(({ results }) => results.map(({id, title, overview, poster_path, vote_average, release_date}) => ({
            id, title, overview, poster_path, vote_average, release_date
        })))
        .catch(err => console.log(err));
}

export function fetchFind(title) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=5a3dbcb0d2e3f7987f7290f6cae43c47&query=${title}`)
        .then(response=>{
            if(response.ok) 
                return response.json();
            throw new Error('Fetching error'+ response.statusText);
        })
        .then(({ results }) => results.map(({id, title, overview, poster_path, vote_average, release_date}) => ({
            id, title, overview, poster_path, vote_average, release_date
        })))
        .catch(err => console.log(err));
}