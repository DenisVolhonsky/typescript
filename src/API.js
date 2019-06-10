import axios from 'axios';

const API_KEY = '5a3dbcb0d2e3f7987f7290f6cae43c47';

// The application use cinema API
// https://api.themoviedb.org

// fetchData category should be: 'popular', 'top_rated', 'upcoming'
// fetchFind title could be any string (it is name of film)

export function fetchData(category) {
    return axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`)
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
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`)
        .then(({data, statusText})=>{
            if(data) 
                return data;
            throw new Error('Fetching error'+ statusText);
        })
        .then(({ results }) => results.map(({id, title, overview, poster_path, vote_average, release_date}) => ({
            id, title, overview, poster_path, vote_average, release_date
        })))
        .catch(err => console.log(err));
}