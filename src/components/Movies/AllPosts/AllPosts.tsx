import React, { FC } from 'react'
import PostItem from '../PostItem/PostItem'
import './AllPosts.scss'

export interface IMovieItem {
    id: number;
    title: string;
    overview: string;
    poster_path?: string;
    vote_average: number;
    release_date: string;
    favorite: any;
}

interface PostItemProps {
    data: IMovieItem[]
}

const AllPosts:FC<PostItemProps> = (props: PostItemProps) => {
    const { data } = props;
    return (
        <div className="Posts">
            {data.length === 0 ?
                <p className="Posts__empty">Nothing find!!! Try again...</p> :
                data.map(item => (<PostItem key={item.id} {...item} />))}
        </div>
    )
}

export default AllPosts;
