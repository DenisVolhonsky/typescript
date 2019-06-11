import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as orerations from '../../Redux/Auth/operations'
import './SignInForm.scss'


const INITIAL_STATE = { email: '', password: '' };

class signInForm extends Component<any> {
  state = { ...INITIAL_STATE };

  handleChange = (e:any) => {
    this.setState({
      [e.target.name]: e.target.value
    });  
  };

  handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ ...INITIAL_STATE });
  };
  
  render() {
    const { email, password } = this.state;
    return (
      <form className="Auth" onSubmit={this.handleSubmit}>
        <p className="Auth_info">Sign In</p>
        <input 
          className="Auth_input" 
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange} 
          placeholder="example@mail.com"
          autoFocus  
          autoComplete="off" /><br />  
        <input
          className="Auth_input" 
          type="password" 
          name="password"
          value={password}
          onChange={this.handleChange} 
          placeholder="Enter password"/><br />
        <button className="Auth_submit">Sign In</button>
      </form>
    )
  }
}

const mdtp = { 
  onSubmit: orerations.signIn
}

export default connect(null, mdtp)(signInForm)

