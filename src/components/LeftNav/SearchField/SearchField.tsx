import React, { FC } from 'react'
import { connect } from 'react-redux'
import { findPosts } from '../../../Redux/Posts/actionFind'
import { getPosts } from '../../../Redux/Posts/actionPosts'
import './SearchField.scss'

interface SearchFieldProps {
  findPosts: (e: string) => void;
  getPosts: (e: string) => void;
}

const SearchField:FC<SearchFieldProps> = ({findPosts, getPosts}: SearchFieldProps) => {

    const handleFind = (event:any) => {           
      if(event.target.value.length > 0) {        
        findPosts(event.target.value);
      }
      else
      getPosts('popular')
    }

    return(
        <div className="SearchField" >
            <input 
              className="SearchField__input" 
              type="text" placeholder="Search movies by name..." 
              onChange={handleFind}/>
        </div>
    );
}

export default  connect(null, {findPosts, getPosts})(SearchField);