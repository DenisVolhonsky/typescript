import React from 'react'
import Header from '../Header/Header'
import AllPosts from '../AllPosts/AllPosts'
import './App.scss';

import { fetchData, fetchFind } from '../../API'
// console.log(fetchData('popular'));
// console.log(fetchFind('Чернобыль'));

export default class App extends React.Component <{}> {

  state = {
    allPosts: []
  }

  componentDidMount() {
    fetchFind('Чернобыль').then(data => {
      this.setState({
          allPosts: data
      });
    });
  }

  render() {
    // console.log(this.state.allPosts);
    const { allPosts } = this.state;
    
    return (
      <div className="App">
          <Header data={'Header data'} />
          <AllPosts data = {allPosts}/>
      </div>
    );
  }
}


