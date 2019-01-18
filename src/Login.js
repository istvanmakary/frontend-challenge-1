import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { authenticate, getProfileData } from './redux';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  constructor(props) {
    super(props);

    if (!!this.props.token) {
      this.props.history.replace('/profile');
    }
  }
  
  onChange = (name, value) => {
    this.setState({ [name]: value });
  }

  submit = () => {
    this.props.login({ 
      email: this.state.email, 
      password: this.state.password, 
    });
  };

  render() {
    return (
      <>
        <Typography variant="h3" color="inherit" style={{ paddingBottom: 50 }}>
            Log in
        </Typography>
        <TextField 
          label="Email" 
          margin="normal"
          style={{ width: 350 }} 
          onChange={(e) => this.onChange('email', e.target.value)} 
        />
        <TextField 
          label="Password" 
          margin="normal" 
          style={{ width: 350 }} 
          onChange={(e) => this.onChange('password', e.target.value)} 
          type="password"  
        />
        <br/>
        <Button children="Log in" color="primary" variant="contained" onClick={this.submit} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...getProfileData(state),
});

const mapDispatchToProps = (dispatch) => ({
  login: (props) => dispatch(authenticate(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);