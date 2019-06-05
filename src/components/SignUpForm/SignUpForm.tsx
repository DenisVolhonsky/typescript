import React from 'react'
import { connect } from 'react-redux'
import * as orerations from '../../Redux/Auth/operations'
import './SignUpForm.scss'


const INITIAL_STATE = { name: '', email: '', password: '' };

class signUpForm extends React.Component<any> {
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
    const { name, email, password } = this.state;
    return (
      <form className="Auth" onSubmit={this.handleSubmit}>
        <p className="Auth_info">Sign up</p>
        <input 
          className="Auth_input" 
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange} 
          placeholder="Enter login" 
          autoFocus 
          autoComplete="off" /><br />
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
        <button className="Auth_submit">Sign up</button>
      </form>
    )
  }
}

const mstp = { 
  onSubmit: orerations.signUp
}

export default connect(null, mstp)(signUpForm)

