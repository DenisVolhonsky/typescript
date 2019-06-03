export function fetchData(category) {
    return fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=5a3dbcb0d2e3f7987f7290f6cae43c47`)
        .then(response=>{
            if(response.ok) return response.json();
            throw new Error('Fetching error'+ response.statusText);
        })
        .then(data => {
          //console.log(data);
            let films = [];
            data.results.map(item => {
                const {id, title, overview, poster_path, vote_average, release_date} = item;
                films.push({id, title, overview, poster_path, vote_average, release_date});
                return films;
            });
            return films;
        })
        .catch(err => console.log(err));
}


export function fetchFind(title) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=5a3dbcb0d2e3f7987f7290f6cae43c47&query=${title}`)
        .then(response=>{
            if(response.ok) return response.json();
            throw new Error('Fetching error'+ response.statusText);
        })
        .then(data => {
            //console.log(data);
            let films = [];
            data.results.map(item => {
                const {id, title, overview, poster_path, vote_average, release_date} = item;
                films.push({id, title, overview, poster_path, vote_average, release_date});
                return films;
            });
            return films;
        })
        .catch(err => console.log(err));
}