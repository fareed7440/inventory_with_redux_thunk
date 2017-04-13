import React from 'react'
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import * as DB from '../firebase/database';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
const styles = {
    height: 650,
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


class Sale extends React.Component{
constructor(props){
    super(props)
    this.state = {
        product : '',
        store : '',
        quantity : '',
        price :'',
        date:new Date()
    }
}
componentDidMount(){
    
}
 handleStorename = (event, index, value) => { this.setState({ store: value }); console.log(value) }
  handleProductname = (event, index, value) => { this.setState({ product: value }); console.log(value) }
handleFormType = (e) => {
        const month = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov"];
        const getmonth = this.state.date.getMonth();
        const months = month[getmonth];
        const hours = this.state.date.getHours() > 12 ? this.state.date.getHours() - 12 : this.state.date.getHours();
        const timeconvention = this.state.date.getHours() > 12 ? "PM" : "AM";

        e.preventDefault();
        var product = this.state.product
        var quantity = parseInt(this.refs.quantity.getValue())
        var price = parseInt(this.refs.price.getValue())
        var date = months + " /" + this.state.date.getDate() + "/" + this.state.date.getFullYear() + " " + " " + " " + hours + ":" + this.state.date.getMinutes() + ":" + this.state.date.getSeconds() + " " + timeconvention;
        var store = this.state.store;
        var obj = {
            product: product,
            quantity: quantity,
            price: parseInt(price * quantity),
            date: date,
            store: store
        }
        console.log('1111111', obj)
        this.props.addPropductRequest(obj)
    }

render(){
    return(
        <div>


   <AppBar
                    title="Sale"
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
                            /><br /><br />
                            
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
                            /><br /><br />
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
                            /><br /><br />
                            <DatePicker

                                hintText="enter Date"
                                container="inline"
                                ref='date'
                                name='date'
                                 style={{ color: '#7B1FA2', textAlign: 'center' }}
                                 
                                floatingLabelText="Select Date "
                               floatingLabelStyle={styless.floatingLabelStyle}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
                                onChange={this.handleDateChange}

                            /><br /><br />
                            <SelectField
                                multiple={true}
                                  floatingLabelStyle={styless.floatingLabelStyle}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
                                floatingLabelText="Select Store "
                                ref='store'
                                name='store'
                                type='text'
                                value={this.state.store}
                                onChange={this.handleStorename}
                            >
                                {
                                    Addstore.map((v, i) => {
                                        return (
                                            <MenuItem value={v.store} key={i} primaryText={v.store}></MenuItem>
                                        )
                                    })}

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





        
   


}
