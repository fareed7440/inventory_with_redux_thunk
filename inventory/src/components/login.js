import React from 'react'
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';


const styles = {
    height: 400,
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
class AdmLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.handleFormType = this.handleFormType.bind(this);
        this.handleInputType = this.handleInputType.bind(this)
    }
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
        var email = this.refs.email.getValue();
        var password = this.refs.password.getValue();
        var obj = {
            email: email,
            password: password,
        }
        console.log('1111111', obj)
        this.props.AdminLogin(obj)
    }


    render() {
        return (
            <div>

                <AppBar
                    title="Admin Login"
                    style={{ backgroundColor: '#7B1FA2', textAlign: 'center' }}
                    //style = {{textAlign:'center'}}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />


                <center>
                    <Paper style={styles} zDepth={5} rounded={false} >
                        <form onSubmit={this.handleFormType}>
                            <TextField
                                ref='email'
                                name='email'
                                type='email'
                                required={true}
                                hintText='type Here'
                                floatingLabelText="Enter Email"
                                floatingLabelStyle={styless.floatingLabelStyle}
                                onChange={this.handleInputType}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
                            /><br /><br /><br />

                            <TextField
                                ref='password'
                                name='password'
                                type='password'
                                required={true}
                                hintText='type Here'
                                onChange={this.handleInputType}
                                floatingLabelText="Enter password "
                                floatingLabelStyle={styless.floatingLabelStyle}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
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

export default AdmLogin;