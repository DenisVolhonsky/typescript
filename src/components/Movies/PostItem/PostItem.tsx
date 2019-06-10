import React from 'react'
import { connect } from 'react-redux'
import { IMovieItem } from '../AllPosts/AllPosts';
import { favoriteItems } from '../../../Redux/FavoriteList/actionFavoriteList'

import './PostItem.scss'

interface IFavorite {
    id: number,
    title: string;
    overview: string,
    poster_path: string,
    vote_average: number,
    release_date: string
}

const PostItem: React.FC<IMovieItem> = ({ id, title, overview, poster_path, vote_average, release_date, favorite }) => {
    const cardData = {id, title, overview, poster_path, vote_average, release_date};
    const clickHandler = () => favorite(cardData);

    return (
        <div className="PostsItem">
            <div className="PostsCard">
                <div className="PostsItem__popularity">{vote_average}</div>
                <img className="PostsItem__img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                <div className="PostsItem_info">
                    <div className="PostsItem__title">{title}</div>
                    <div className="PostsItem__overview">{overview.slice(0, 120) + '...'}</div>
                    <div className="PostsItem__rate">Release date: {release_date.slice(0, 4)}</div>
                </div>
                <button className="PostsItem__add" onClick={clickHandler}>+</button>
            </div>
        </div>);

}

const mapDispatchToProps = (dispatch: any) => ({
    favorite: (item:IFavorite) => dispatch(favoriteItems(item))
});

export default connect(null, mapDispatchToProps)(PostItem);