import React from 'react';
import AppBar from 'material-ui/AppBar';
import "../index.css"
//import PropTypes from 'prop-types';
//import {Link} from "react-router"
import { Link } from 'react-router'
import { orange500, blue500, purple700 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FlatButton from 'material-ui/FlatButton';
import { logoutRequest } from '../store/action/logoutAct'
import { connect } from 'react-redux'

const style = {
  margin: 15,
  backgroundColor: 'transparent',
};
const styless = {
  customWidth: {
    width: 150,
    backgroundColor: 'purple700',
  },
};


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
    this.handlelogout = this.handlelogout.bind(this)
  }

  handleToggle = () => this.setState({ open: !this.state.open });
handlelogout=()=>{

  this.props.LogoutRequest()
}

  render() {
    return (
      <div>



        <AppBar
          title="Dashboard"
          onTouchTap={this.handleToggle}
          style={{ backgroundColor: '#7B1FA2', textAlign: 'center', height: '66' }}

          iconClassNameRight="muidocs-icon-navigation-expand-more"
        >
          {/*<Link to=''>  <RaisedButton label="Logout" primary={false} style={style} /></ Link>*/}

        </AppBar>

        <Drawer width={300} openSecondary={false} open={this.state.open} docked={true} >

          <AppBar title="INFO"
            style={{ backgroundColor: '#7B1FA2', textAlign: 'center' }}
          />

          <img src="http://enterprisesuite.intuit.com/assets/img/inv-management-complex.png" height='200' width='260' alt="invent" />
          <br />
          <br /> <br />


          <Link to='/storeCon'> <RaisedButton
            fullWidth
            style={styless}
            onTouchTap={this.handleToggle}

            label="create Store"
            primary={false}
          /></ Link><br /><br /><br />
          <Link to='/addproductCon'> <RaisedButton
            fullWidth
            style={{ backgroundColor: purple700 }}
            onTouchTap={this.handleToggle}

            label="Add Product"
            primary={false}

          /></ Link><br /><br /><br />
          <Link to="/saleCon"> <RaisedButton
            fullWidth
            style={styless}
            onTouchTap={this.handleToggle}

            label="Add sale "
            primary={false}
          /></ Link><br /><br /><br />

          <Link to="/purchaseCon"> <RaisedButton
            fullWidth
            style={styless}
            onTouchTap={this.handleToggle}

            label="Add purchase "
            primary={false}
          /></ Link><br /><br /><br />

          <Link to="/viewpurchaseCon"> <RaisedButton
            fullWidth
            style={styless}
            onTouchTap={this.handleToggle}
            label="view Purchase "
            primary={false}
          /></ Link><br /><br /><br />

          <Link to="/viewsalCon"> <RaisedButton
            fullWidth
            style={styless}
            onTouchTap={this.handleToggle}

            label="View Sale "
            primary={false}
          /></ Link><br /><br /><br />

          <Link to="/viewstockCon"> <RaisedButton
            fullWidth
            style={styless}
            onTouchTap={this.handleToggle}
            label="View Stock "
            primary={false}
          /></ Link><br /><br /><br />
          <RaisedButton
          onClick={this.handlelogout}
            fullWidth
            style={styless}
            onTouchTap={this.handleToggle}
            label="logout "
            primary={false}
          /><br />


        </Drawer>
        <div>
          {this.props.children}
        </div>
      </div>


    )

  }
}


const mapStateToProps=(state)=> {
  return {
    app: state.addproductReducer,
  }
}


const mapDispatchToProps=(dispatch)=> {
  return {

    LogoutRequest: () => dispatch(logoutRequest()),

  }
}


const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;