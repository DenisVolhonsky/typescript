import React from "react";
import AllPosts from "../AllPosts/AllPosts";
import { connect } from "react-redux";
import { getPosts } from "../../../Redux/Posts/actionPosts";
import SearchField from "../../LeftNav/SearchField/SearchField";
import SearchBlock from "../../LeftNav/SearchBlock/SearchBlock";
import { favoriteItemsRemove } from "../../../Redux/FavoriteList/actionFavoriteList";
import SearchCategory from "../../LeftNav/SearchCategory/SearchCategory";
import FavoriteList from "../../LeftNav/FavoriteList/FavoriteList";
import "./Main.scss";

class Main extends React.Component {
  componentDidMount() {
    this.props.getPostItems('popular');
  }

  render() {
    const { allPosts, favorite, deleteFavoriteItem } = this.props;
    let favoriteItemsStore = JSON.parse(localStorage.getItem("favoriteItems")) || favorite
    return (
      <div className="Main">
        <SearchBlock className="SearchBlock">
            <SearchField />
            <SearchCategory />
            <FavoriteList
              deleteFavoriteItem={deleteFavoriteItem}
              items={favoriteItemsStore}
            />
          </SearchBlock>
        <AllPosts data={allPosts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allPosts: state.posts,
  favorite: state.favorite
});

const mapDispatchToProps = dispatch => ({
  getPostItems: (category) => dispatch(getPosts(category)),
  deleteFavoriteItem: (item) => dispatch(favoriteItemsRemove(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);