import React, { FC } from 'react';
import './FavoriteItem.scss';


interface FavoriteItemProps {
    id: number;
    title: string;
    release_date: string;
    vote_average:number;
    poster_path: string;
    deleteFavoriteItem: (card: any)=> void;
}

const FavoriteItem: FC<FavoriteItemProps> = ({id, title, release_date, vote_average, poster_path, deleteFavoriteItem}) => {
    const cardData = {id, title, release_date, vote_average, poster_path};
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
    );
}

export default FavoriteItem;