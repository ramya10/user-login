import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';
import './UserLogin.css';

class UserLoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {username, password, error, usernameError, passwordError} = this.state;
    let {isLoginSuccess, loginError} = this.props;
    return (
      <div>
        <h2> User Login Form </h2>
        <form name="loginForm" onSubmit={this.onSubmit}>
          <div>{error}</div>
          <div className="container">
              <label>User Name:</label>
              <input type="text" name="username"
                placeholder= 'Enter sample@gmail.com'
                onChange={this.onUserNameChange.bind(this)}
                onBlur={this.onUserNameBlur.bind(this)}
                value={username}/>
                <div className="error-fields">{usernameError}</div>
              <label>Password:</label>
              <input type="password" name="password"
                placeholder='Enter sample123'
                onChange={this.onPasswordChange.bind(this)}
                onBlur={this.onPasswordBlur.bind(this)}
                value={password}/>
                <div className="error-fields">{passwordError}</div>
              <button type="submit">Submit</button>
          </div>


        </form>
        <div className="message">
          { isLoginSuccess && <div>Login Successful.!</div> }
          { loginError && <div>{loginError.message}</div> }
        </div>
    </div>
    )
  }

  onUserNameChange(e){
    this.setState({
      username: e.target.value,
      usernameError:''
    })
  }

  onUserNameBlur(e){
    if(e.target.value === ''){
      this.setState({
        usernameError: 'Enter Valid Email'
      })
    }
  }

  onPasswordBlur(e){
    if(e.target.value === ''){
      this.setState({
        passwordError: 'Enter Valid Password'
      })
    }
  }

  onPasswordChange(e){
    this.setState({
      password: e.target.value,
      passwordError:''
    })
  }

  onSubmit(e) {
    e.preventDefault();
    let { username, password } = this.state;
    if (username === '' || password === ''){
      this.setState({
        error: 'Please enter username and password'
      })
    }
    this.props.login(username, password);
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginForm);
