import React from 'react'
import { IMovieItem } from '../AllPosts/AllPosts';

const PostItem: React.FC<IMovieItem> = ({ id, title, overview, poster_path, vote_average }) => (
    <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{overview}</li>
        <li>{poster_path}</li>
        <li>{vote_average}</li>
    </ul>
)

export default PostItem;

