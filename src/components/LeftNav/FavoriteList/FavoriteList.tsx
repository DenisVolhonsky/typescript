import React, { FC } from 'react';
import FavoriteItem from '../FavoriteItem/FavoriteItem';
import './FavoriteList.scss';

interface FavoriteItemsProps {
    id: number;
    title: string;
    release_date: string;
    vote_average:number;
    poster_path: string;
}

interface FavoriteListProps {
    items: FavoriteItemsProps[];
    deleteFavoriteItem: (card: any)=> void;
}

const FavoriteList:FC<FavoriteListProps> = ({items, deleteFavoriteItem}) => {
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
                {items.map(item => <FavoriteItem key={item.id} deleteFavoriteItem={deleteFavoriteItem} {...item}/>)}
            </div>
        );
    }
}

export default FavoriteList;