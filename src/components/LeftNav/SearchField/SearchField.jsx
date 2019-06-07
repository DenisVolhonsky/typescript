import React from 'react'
import { connect } from 'react-redux'
import { findPosts } from '../../../Redux/Posts/actionFind'
import { getPosts } from '../../../Redux/Posts/actionPosts'
import './SearchField.scss'

const SearchField = ({findPostItems, getPostItems}) => {

    const handleFind = (event) => {           
      if(event.target.value.length > 0) {        
        findPostItems(event.target.value);
      }
      else
        getPostItems('popular')
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

const mapDispatchToProps = (dispatch) => ({
  findPostItems: (title) => dispatch(findPosts(title)), 
  getPostItems: (category) => dispatch(getPosts(category))
})

export default  connect(null, mapDispatchToProps)(SearchField);