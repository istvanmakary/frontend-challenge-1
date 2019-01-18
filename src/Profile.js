import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { updateProfile, getProfileData } from './redux';

class Profile extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    bio: '',
  };

  constructor(props) {
    super(props);
    if (!this.props.token) {
      this.props.history.replace('/');
    }
  }
  
  onChange = (name, value) => {
    this.setState({ [name]: value });
  }

  submit = () => {
    this.props.update({ 
      firstName: this.state.firstName, 
      lastName: this.state.lastName, 
      bio: this.state.bio, 
      token: this.props.token,
    });
  };

  render() {
    return (
      <>
        <Typography variant="h3" color="inherit" style={{ paddingBottom: 50 }}>
            Profile
        </Typography>
        <TextField 
          label="First Name" 
          margin="normal" 
          style={{ width: 350 }}
          defaultValue={this.props.firstName}
          onChange={(e) => this.onChange('firstName', e.target.value)} 
        />
        <TextField 
          label="Last Name" 
          margin="normal" 
          style={{ width: 350 }}
          defaultValue={this.props.lastName}
          onChange={(e) => this.onChange('lastName', e.target.value)} 
        />
        <TextField 
          label="Description" 
          margin="normal" 
          multiline
          rowsMax={5}
          style={{ width: 350 }}
          defaultValue={this.props.bio}
          onChange={(e) => this.onChange('bio', e.target.value)} 
        />
        <br />
        <Button children="Update Profile" color="primary" variant="contained" onClick={this.submit} />
        <br />
        <Button children="Log out" color="secondary" variant="contained" onClick={this.props.logOut} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...getProfileData(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: (props) => dispatch(updateProfile(props)),
  logOut: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);