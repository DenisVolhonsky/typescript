import React from 'react';
import './SearchField.scss'

const SearchField = ({onChangeFilm}) => {
    let input = '';

    const onFormSubmit = (event) => {
        event.preventDefault();  // denied sending form
        if(input.value !== ''){   // checking for
            onChangeFilm(input.value);  // transfering input.value to currentFormSubmit in PageMovies
        }
        event.target.reset(); // reset input value after submit
    }

    return(
        <form className="SearchField" onSubmit={onFormSubmit}>
            <input className="SearchField__input" type="text" placeholder="Search movies by name..." ref={node => (input=node)}/>
        </form>
    );
}

export default  SearchField;