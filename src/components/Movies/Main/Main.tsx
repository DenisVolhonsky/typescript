import React, { Component } from "react"
import AllPosts from "../AllPosts/AllPosts"
import { connect } from "react-redux"
import { getPosts } from "../../../Redux/Posts/actionPosts"
import SearchField from "../../LeftNav/SearchField/SearchField"
import SearchBlock from "../../LeftNav/SearchBlock/SearchBlock"
import { favoriteItemsRemove } from "../../../Redux/FavoriteList/actionFavoriteList"
import SearchCategory from "../../LeftNav/SearchCategory/SearchCategory"
import FavoriteList from "../../LeftNav/FavoriteList/FavoriteList"
import "./Main.scss"

interface MainProps {
  allPosts: any;
  favorite: any;
  favoriteItemsRemove: ()=>void;
  getPosts: (e:string) => void;
}

class Main extends Component<MainProps, {}> {
  componentDidMount() {
    this.props.getPosts('popular');
  }

  render() { 
    const { allPosts, favorite, favoriteItemsRemove } = this.props;
    let favoriteItemsStore = JSON.parse(localStorage.getItem('favoriteItems') || "") || favorite
    return (
      <div className="Main">
        <SearchBlock className="SearchBlock">
            <SearchField />
            <SearchCategory />
            <FavoriteList
              deleteFavoriteItem={favoriteItemsRemove}
              items={favoriteItemsStore}
            />
          </SearchBlock>
        <AllPosts data={allPosts} />
      </div>
    );
  }
}

const mapStateToProps = (state:any) => ({
  allPosts: state.posts,
  favorite: state.favorite
});

export default connect(
  mapStateToProps,
  { getPosts, favoriteItemsRemove }
)(Main);