import React from "react";
import AllPosts from "../AllPosts/AllPosts";
import { connect } from "react-redux";
import { getInitialData } from "../../../Redux/Posts/actionPosts";
import store from "../../../Redux/store";
import "./Main.scss";

class Main extends React.Component<any> {

  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const { allPosts } = this.props;

    return (
      <div className="Main">
        <AllPosts data={allPosts} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  allPosts: state.postsReducer
})

const mapDispatchToProps = (dispatch: any) => ({
  getAllPosts: () => dispatch(getInitialData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);


// state = {
//   allPosts: [],
//   favoriteItems:  JSON.parse(localStorage.getItem('favoriteItems'))||[],
// }

// handleChangeCategory = category => {
//   fetchData(category).then(data => {
//       this.setState({
//           allPosts: data
//       });
//   });
// }

// handleFind = title => {
//   fetchFind(title).then(data => {
//       this.setState({
//           allPosts: data
//       });
//   });
// }

// addToFavorite = film => {
//   let arr = [...this.state.favoriteItems, film];
//   this.setState({favoriteItems: arr.filter((item, index, self) => index === self.findIndex(t =>  t.id === item.id))});
// }

// deleteFavorite = id => {    // delete for favorite list
//   this.setState({
//       favoriteItems: this.state.favoriteItems.filter(post => post.id !== id)
//   });
// }

// /////////////////on loading/////////////
// componentWillMount(){
//   fetchData('popular').then(data => {
//       this.setState({
//           allPosts: data
//       });
//   });

// }