import React from 'react'
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';

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

            product: '', company: '', quantity: '', price: '', date: new Date(),store:'agha store',
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
    
     handleDateChange = (event, date) => {
    this.setState({
     date: date,
    });
    console.log(date);
  };
   handleStorename = (event,index,value) =>{this.setState({store : value});console.log(value)}
    handleFormType = (e) => {
        const month = ["Jan","Feb","Mar","April","May","Jun","July","Aug","Sep","Oct","Nov"];
        const getmonth = this.state.PurchasesDate.getMonth();
        const months = month[getmonth];
        const hours = this.state.PurchasesDate.getHours() > 12 ? this.state.PurchasesDate.getHours() -12 : this.state.PurchasesDate.getHours();
        const timeconvention = this.state.PurchasesDate.getHours() > 12 ? "PM" : "AM";

        e.preventDefault();
        var product = this.refs.product.getValue();
        var company = this.refs.company.getValue();
        var quantity = parseInt(this.refs.quantity.getValue())
        var price = parseInt(this.refs.price.getValue())
        var date =  months + " /" + this.state.PurchasesDate.getDate()   + "/" + this.state.PurchasesDate.getFullYear() + " " + " "  + " " + hours +  ":" + this.state.PurchasesDate.getMinutes() + ":" + this.state.PurchasesDate.getSeconds()+ " "  +  timeconvention,
        var store  = this.state.store;
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
                    title="Add Product"
                    style={{ backgroundColor: '#7B1FA2', textAlign: 'center' }}
                    //style = {{textAlign:'center'}}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />


                <center>
                    <Paper style={styles} zDepth={5} rounded={false} >
                        <form onSubmit={this.handleFormType}>
                            <TextField
                                ref='product'
                                name='product'
                                type='text'
                                required={true}
                                hintText='type Here'
                                floatingLabelText="Enter product Name"
                                floatingLabelStyle={styless.floatingLabelStyle}
                                onChange={this.handleInputType}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
                            /><br /><br /><br />
                            <TextField
                                ref='company'
                                name='company'
                                type='text'
                                required={true}
                                hintText='type Here'
                                onChange={this.handleInputType}
                                floatingLabelText="Enter company Name "
                                floatingLabelStyle={styless.floatingLabelStyle}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
                            /><br /><br /><br />
                            <TextField
                                ref='quantity'
                                name='quantity'
                                type='text'
                                required={true}
                                hintText='type Here'
                                onChange={this.handleInputType}
                                floatingLabelText="Enter Quantity"
                                floatingLabelStyle={styless.floatingLabelStyle}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
                            /><br /><br /><br />
                            <TextField
                                ref='price'
                                name='price'
                                type='number'
                                required={true}
                                hintText='type Here'
                                onChange={this.handleInputType}
                                floatingLabelText="Enter Price "
                                floatingLabelStyle={styless.floatingLabelStyle}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
                            /><br /><br /><br />
                            <DatePicker
                                floatingLabelStyle={styless.floatingLabelStyle}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
                                hintText="enter Date"
                                container="inline"
                                ref='date'
                                name='date'
                                type='date'
                                onChange={this.handleDateChange}

                            /><br /><br /><br />
                            <SelectField
                                multiple={true}
                                 ref='store'
                                name='store'
                                type='text'
                                hintText="Select store"
                                 value={this.state.store}
                                onChange={this.handleStorename}
                            >
                                {this.menuItems(values)}
                            </SelectField>

                            <br /><br /><br />
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