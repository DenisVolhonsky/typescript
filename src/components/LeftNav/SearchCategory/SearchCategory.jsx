import React from 'react';
import { getPosts } from '../../../Redux/Posts/actionPosts'
import { connect } from "react-redux";
import { btn } from '../../constants'
import './SearchCategory.scss'

class SearchCategory extends React.Component {   
    state = {
        selectBtn: 'popular'
    };

    _handleActiveBtn = event => {
        this.props.getPostItems(event.target.value);
        this.setState({
            selectBtn: event.target.value,
        });
    }

    render() {
        return (
            <div className="SearchCategory">
                {btn.map((item)=> (
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
  
const mapDispatchToProps = (dispatch) => ({
getPostItems: (category) => dispatch(getPosts(category))
});
  
export default connect(
    null,
    mapDispatchToProps
  )(SearchCategory);