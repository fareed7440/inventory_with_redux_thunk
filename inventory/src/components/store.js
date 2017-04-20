import React from 'react'
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import './style.css';

const styles = {
    height: 700,
    width: 450,
    margin: 120,
    textAlign: 'center',
    display: 'inline-block',
};

const style1 = {
    margin: 12,
};
const styless = {
    errorStyle: {
        color: '#7B1FA2',
    },
    underlineStyle: {
        borderColor: '#7B1FA2',
    },
    floatingLabelStyle: {
        color: '#7B1FA2',
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
};
class Store extends React.Component {
    constructor() {
        super();
        this.state = {
            store: '',
            location: '',
            avatar: '',
            isUploading: false,
            progress: 0,
            avatarURL: ''
        }
        this.handleFormType = this.handleFormType.bind(this);
        this.handleInputType = this.handleInputType.bind(this)
    }




 //handleChangeUsername = (event) => this.setState({username: event.target.value});
  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
      this.setState({isUploading: false});
      console.error(error);
  }
  handleUploadSuccess = (filename) => {
      this.setState({avatar: filename, progress: 100, isUploading: false});
      firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
  };





    handleInputType = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value

        const name = target.name;
        // const value = target.value;
        this.setState({
            [name]: value
        })
    }
    handleFormType = (e) => {
        e.preventDefault();
        var store = this.refs.store.getValue();
        var location = this.refs.location.getValue();
        var obj = {
            store: store,
            location: location,
        }
        console.log('1111111', obj)
        this.props.storeDataRequest(obj)
    }


    render() {
        return (
            <div>




                <center>
                    <Paper style={styles} zDepth={5} rounded={false} >
                        <AppBar
                            title="Create Store"
                            style={{ backgroundColor: '#7B1FA2', textAlign: 'center' }}
                            //style = {{textAlign:'center'}}
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                        />
                        <form onSubmit={this.handleFormType}>
                            <TextField
                                ref='store'
                                name='store'
                                type='text'
                                required={true}
                                hintText='type Here'
                                floatingLabelText="Enter Store Name"
                                floatingLabelStyle={styless.floatingLabelStyle}
                                onChange={this.handleInputType}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
                            /><br /><br /><br />

                            <TextField
                                ref='location'
                                name='location'
                                type='text'
                                required={true}
                                hintText='type Here'
                                onChange={this.handleInputType}
                                floatingLabelText="Enter location "
                                floatingLabelStyle={styless.floatingLabelStyle}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
                            /><br /><br /><br />
                       
                       

{/*<label>Username:</label>
          <input type="text" value={this.state.username} name="username" onChange={this.handleChangeUsername} />*/}
          <label>Avatar:</label>
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>
          }
          {this.state.avatarURL &&
            <img className="img1" src={this.state.avatarURL} />
          }



  <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          /><br /><br /><br />
     <RaisedButton label="submit" type='submit' disabled={false} style={{ style1, color: 'red' }} />
                            <br /><br /><br />
 </form>
                    </Paper>
                </center>
            </div>
        )
    }

}//main

export default Store;