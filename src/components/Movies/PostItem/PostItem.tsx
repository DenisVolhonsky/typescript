import React from 'react'
import { connect } from 'react-redux'
import { IMovieItem } from '../AllPosts/AllPosts';
import { favoriteItems } from '../../../Redux/FavoriteList/actionFavoriteList'

import './PostItem.scss'


interface IFavorite {
    title: string;
    overview: string,
    poster_path: string,
    vote_average: number,
    release_date: string
}

const PostItem: React.FC<IMovieItem> = ({ title, overview, poster_path, vote_average, release_date, favorite }) => {
    
    
    // addToFavorite = film => {
    //     let arr = [...this.state.favoriteItems, film];
    //     this.setState({
    //       favoriteItems: arr.filter(
    //         (item, index, self) => index === self.findIndex(t => t.id === item.id)
    //       )
    //     });
    //   };
    const cardData = {title, overview, poster_path, vote_average, release_date};
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

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
    // getPostItems: (category) => dispatch(getPosts(category))
    favorite: (item:IFavorite) => dispatch(favoriteItems(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);

// onClick={() => favorite(cardData)}