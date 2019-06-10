import React from 'react';
import { connect } from 'react-redux'
import { favoriteItemsRemove } from '../../../Redux/FavoriteList/actionFavoriteList'
import './FavoriteItem.scss';

const FavoriteItem = ({id, title, release_date, vote_average, poster_path, deleteFavoriteItem}) => {
    const cardData = {id, title, release_date, vote_average, poster_path,};
    const handlerClick = () => deleteFavoriteItem(cardData);

    return (
        <div className="FavoriteItem">
            <img className="FavoriteItem__img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
            <div className="FavoriteItem__body">
                <h3 className="FavoriteItem__title">{title}</h3>
                <p className="FavoriteItem__release">Release date: {release_date.substr(0,4)}</p>
                <p className="FavoriteItem__vote">Rating: {vote_average}</p>
                <button className="FavoriteItem__btn" onClick={handlerClick}>-</button>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    deleteFavoriteItem: (item) => dispatch(favoriteItemsRemove(item))
})

export default connect(null, mapDispatchToProps)(FavoriteItem);