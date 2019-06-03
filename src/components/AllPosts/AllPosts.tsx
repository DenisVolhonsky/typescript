import React from 'react'
import PostItem from '../PostItem/PostItem'
// import { fetchData, fetchFind } from '../../API'


// console.log(fetchData('popular'));
// console.log(fetchFind('Чернобыль'));

export interface IMovieItem {
    id: number;
    title: string; 
    overview: string; 
    poster_path?: string;
    vote_average: number;
    release_date: string
}


interface PostItemProps {
    data: IMovieItem[]
}

const AllPosts: React.FC <PostItemProps> = (props: PostItemProps) => {
  const { data } = props;
 
    return (
        <div>
           {data.map(item=>(<PostItem key={item.id} {...item} />))}
        </div>
    )
}

export default AllPosts;
