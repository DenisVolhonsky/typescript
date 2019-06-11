import React, { Component } from 'react';
import { getPosts } from '../../../Redux/Posts/actionPosts'
import { connect } from "react-redux";
import { category } from '../../constants'
import './SearchCategory.scss'

interface SearchCategoryProps {
    getPosts: (e:string)=> void;
}

class SearchCategory extends Component<SearchCategoryProps, {}> {   
    state = {
        selectBtn: 'popular'
    };

    _handleActiveBtn = (event:any) => {
        this.props.getPosts(event.target.value);
        this.setState({
            selectBtn: event.target.value,
        });
    }

    render() {
        return (
            <div className="SearchCategory">
                {category.map((item)=> (
                item === this.state.selectBtn ?
                    (<button
                            key={item}
                            className=" SearchCategory__btn SearchCategory__btn--active"
                            onClick={this._handleActiveBtn}
                            value={item}>
                            {item}
                    </button>)
                    :
                    (<button
                            key={item}
                            className="SearchCategory__btn"
                            onClick={this._handleActiveBtn}
                            value={item}>
                            {item}
                    </button>)
                ))}
            </div>
        );
    }
}
  
export default connect(
    null,
    { getPosts }
  )(SearchCategory);