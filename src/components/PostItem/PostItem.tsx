import React from 'react'
import { IMovieItem } from '../AllPosts/AllPosts';
import './PostItem.scss'

const PostItem: React.FC<IMovieItem> = ({ title, overview, poster_path, vote_average, release_date }) => (
    <div className="PostsItem">
        <div className="PostsCard">
            <div className="PostsItem__popularity">{vote_average}</div>
            <img className="PostsItem__img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
            <div className="PostsItem_info">
                <div className="PostsItem__title">{title}</div>
                <div className="PostsItem__overview">{overview.slice(0, 120) + '...'}</div>
                <div className="PostsItem__rate">Release date: {release_date.slice(0, 4)}</div>
            </div>
            <button className="PostsItem__add" onClick={() => console.log(111)}>+</button>
        </div>
    </div>
)

export default PostItem;

