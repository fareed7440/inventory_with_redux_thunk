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
import  firebase  from  'firebase';
import  FileUploader  from  'react-firebase-file-uploader';
import './style.css';

const styles = {
    height: 750,
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


class Purchase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: '',
            avatar:  '',
                  isUploading:  false,
                  progress:  0,
                  avatarURL: '',

            store: '',
            quantity: '',
            price: '',
            date: new Date()
        }
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
    componentDidMount() {
        this.props.storedata();
        this.props.productdata();
        console.log('wwwwww', this.props.storedata)
        console.log('eeee', this.props.productdata)
    }
    handleChangeUsername  =  (event)  =>  this.setState({ username:  event.target.value });
      handleUploadStart  =  ()  =>  this.setState({ isUploading:  true,  progress:  0 });
      handleProgress  =  (progress)  =>  this.setState({ progress });
      handleUploadError  =  (error)  =>  {
              this.setState({ isUploading:  false });
              console.error(error);
      }
      handleUploadSuccess  =  (filename)  =>  {
              this.setState({ avatar:  filename,  progress:  100,  isUploading:  false });
              firebase.storage().ref('images').child(filename).getDownloadURL().then(url  =>  this.setState({ avatarURL:  url }));
      };

    handleDateChange = (event, datee) => {
        this.setState({
            date: datee,
        });
    }
    handleStorename = (event, index, value) => { this.setState({ store: value }); console.log(value) }
    handleProductname = (event, index, value) => { this.setState({ product: value, key: value }); console.log(value) }
    handleFormType = (e) => {
        e.preventDefault();
        console.log("product ki state ", this.state.product)
        const month = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov"];
        const getmonth = this.state.date.getMonth();
        const months = month[getmonth];
        const hours = this.state.date.getHours() > 12 ? this.state.date.getHours() - 12 : this.state.date.getHours();
        const timeconvention = this.state.date.getHours() > 12 ? "PM" : "AM";

        var id = this.state.product
        var allid = id.toString().split('/');
        // console.log("222222222222222222222222222" , ehsan)
        var productName = allid[0];
        var productId = allid[1];
        console.log("Product Name is ", productName);
        console.log("Product ki Id", productId)
        // console.log("Product id is " , productID);



        var product = productName;
        var productid = productId;
        var quantity = parseInt(this.refs.quantity.getValue())
        var price = parseInt(this.refs.price.getValue())
        var date = months + " /" + this.state.date.getDate() + "/" + this.state.date.getFullYear() + " " + " " + " " + hours + ":" + this.state.date.getMinutes() + ":" + this.state.date.getSeconds() + " " + timeconvention;
        var store = this.state.store;
        var obj = {
            product: product,
            productID: productid,
            quantity: quantity,
            price: price,
            date: date,
            store: store,
            pic:this.state.avatarURL
        }
        // console.log('1111111', obj)
        this.props.addPurchaseRequest(obj)
        console.log("product ki state", obj)
    }

    render() {
        const app1 = this.props.app.product;
        console.log('ppppppppp', app1)
        const app = this.props.app.store;
        console.log('ssssssssssssssssssssss', app)
        const Addsale = this.props && this.props.app && this.props.app.store ? this.props.app.store : [];
        //  console.log('qqqqqqqqqqqqq',Addsale)
        const Addproduct = this.props && this.props.app && this.props.app.product ? this.props.app.product : [];
        //  console.log('rrrrrrrrrrrrrrrr',Addproduct)

        return (
            <div>




                <center>
                    <Paper style={styles} zDepth={5} rounded={false} >


                        <AppBar
                            title="Add Purhase"
                            style={{ backgroundColor: '#7B1FA2', textAlign: 'center' }}
                            //style = {{textAlign:'center'}}
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                        />
                        <form onSubmit={this.handleFormType.bind(this)}>
                            <SelectField
                                multiple={false}
                                floatingLabelStyle={styless.floatingLabelStyle}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
                                floatingLabelText="Select product "
                                ref='product'
                                name='product'
                                type='text'
                                value={this.state.product}
                                onChange={this.handleProductname}
                            >
                                {
                                    Addproduct.map((v, i) => {
                                        console.log("component : 122", v.key)
                                        return (
                                            <MenuItem value={v.product + "/" + v.key} key={i} primaryText={v.product}></MenuItem>
                                        )
                                    })}

                            </SelectField><br /><br />

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
                                maxDate={new Date()}
                                floatingLabelText="Select Date "
                                floatingLabelStyle={styless.floatingLabelStyle}
                                floatingLabelFocusStyle={styless.floatingLabelFocusStyle}
                                onChange={this.handleDateChange}

                            /><br /><br />
                            <SelectField
                                multiple={false}
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
                                    Addsale.map((v, i) => {
                                        return (
                                            <MenuItem value={v.store} key={i} primaryText={v.store}></MenuItem>
                                        )
                                    })}

                            </SelectField>
 <br /><br /><br /> 
                            <label>Select Pic:</label>
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>

          }
          {this.state.avatarURL &&
            <img  className = 'img1' src={this.state.avatarURL} />
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
          />



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


export default Purchase;