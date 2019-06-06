import React from 'react';
// import PropTypes from 'prop-types';
import './FavoriteItem.scss';

const FavoriteItem = ({id, title, release_date, vote_average, poster_path, onClickDel}) => {
    return (
        <div className="FavoriteItem">
            <img className="FavoriteItem__img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
            <div className="FavoriteItem__body">
                <h3 className="FavoriteItem__title">{title}</h3>
                <p className="FavoriteItem__release">Release date: {release_date.substr(0,4)}</p>
                <p className="FavoriteItem__vote">Rating: {vote_average}</p>
                <button className="FavoriteItem__btn" onClick={()=>onClickDel(id)}>-</button>
            </div>
        </div>
    )
}



// FavoriteList.propTypes = {
//     onTodoClick: PropTypes.func.isRequired,
//     onChangeCity: PropTypes.func.isRequired,
// }

export default FavoriteItem;