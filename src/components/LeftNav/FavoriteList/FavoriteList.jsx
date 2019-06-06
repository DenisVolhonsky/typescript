import React from 'react';
// import PropTypes from 'prop-types';
import FavoriteItem from '../FavoriteItem/FavoriteItem';
import './FavoriteList.scss';

const FavoriteList = ({items, onClickDel}) => {
    if(items.length === 0) {
        return(
            <div className="Favorite">
                <p className="Favorite__title">watchlist</p>
                <p className="Favorite__empty">Add movies to watchlist...</p>
            </div>
        );
    }
    else{
        return(
            <div className="Favorite">
                <p className="Favorite__title">watchlist</p>
                {items.map(item => <FavoriteItem key={item.id} {...item} onClickDel={onClickDel}/>)}
            </div>
        );
    }
}
// FavoriteList.propTypes = {
//     onTodoClick: PropTypes.func.isRequired,
//     onChangeCity: PropTypes.func.isRequired,
// }
export default FavoriteList;