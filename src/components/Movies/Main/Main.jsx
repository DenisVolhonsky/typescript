import React from "react";
import AllPosts from "../AllPosts/AllPosts";
import { connect } from "react-redux";
import { getPosts } from "../../../Redux/Posts/actionPosts";
import SearchField from "../../LeftNav/SearchField/SearchField";
import SearchBlock from "../../LeftNav/SearchBlock/SearchBlock";
import SearchCategory from "../../LeftNav/SearchCategory/SearchCategory";
import FavoriteList from "../../LeftNav/FavoriteList/FavoriteList";
import { fetchData, fetchFind } from '../../../API';
import "./Main.scss";

class Main extends React.Component {
  state = {
    favoriteItems: JSON.parse(localStorage.getItem("favoriteItems")) || []
  };

  componentDidMount() {
    this.props.getPostItems('popular');
  }

  handleChangeCategory = category => {
    fetchData(category).then(data => {
      this.setState({
        allPosts: data
      });
    });
  };

  handleFind = title => {
    fetchFind(title).then(data => {
      this.setState({
        allPosts: data
      });
    });
  };

  addToFavorite = film => {
    let arr = [...this.state.favoriteItems, film];
    this.setState({
      favoriteItems: arr.filter(
        (item, index, self) => index === self.findIndex(t => t.id === item.id)
      )
    });
  };

  deleteFavorite = id => {
    // delete for favorite list
    this.setState({
      favoriteItems: this.state.favoriteItems.filter(post => post.id !== id)
    });
  };



  render() {
    const { allPosts } = this.props;

    const { favoriteItems } = this.state;
    localStorage.setItem(
      "favoriteItems",
      JSON.stringify(this.state.favoriteItems)
    ); // set data from Local Storage

    return (
      <div className="Main">
        <SearchBlock className="SearchBlock">
            <SearchField onChangeFilm={this.handleFind} />
            <SearchCategory />
            <FavoriteList
              items={favoriteItems}
              onClickDel={this.deleteFavorite}
            />
          </SearchBlock>
        <AllPosts data={allPosts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allPosts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  getPostItems: (category) => dispatch(getPosts(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);