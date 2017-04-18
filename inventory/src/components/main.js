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



// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   gridList: {
//     width: 700,
//     height: 750,
//     margin: 50,
//     marginLeft: 400,
//     overflowY: 'auto',
//   },
// };


// const tilesData = [
//   {
//     img: 'https://www.unleashedsoftware.com/assets/uploads/2016/03/Real-time_img01.png',
//     title: 'Hats',
//     author: 'Hans',
//   },
//   {
//     img: 'https://www.neatoscan.com/images/InventoryManager/grow_your_business_with_neatoscan_inventory_manager.jpg',
//     title: 'Honey',
//     author: 'fancycravel',
//   },
//   {
//     img: 'http://empowerla.org/wp-content/uploads/2016/09/inventory.jpg',
//     title: 'inventory managment',
//     author: 'agha',
//   },
//   {
//     img: 'http://www.simmssoftware.com/wordpress/wp-content/uploads/2013/06/simms_aggregateInventory.jpg',
//     title: 'inventory shop',
//     author: 'ihsan',
//   },

//   {
//     img: 'http://wp.evinciblesolutions.com/wp-content/uploads/2016/03/what-is-inventory-management.png',
//     title: 'inventory srock',
//     author: 'Danson67',
//   },
//   {
//     img: 'http://www.dataonesoftware.com/hubfs/BlogPost39.jpg',
//     title: 'inventory managment',
//     author: 'fancycrave1',
//   },

// ];



const styless = {
  customWidth: {
    width: 150,
    backgroundColor: 'purple700',
  },
};


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  render() {
    return (
      <div>



        <AppBar
          title="Dashboard"
          onTouchTap={this.handleToggle}
          style={{ backgroundColor: '#7B1FA2', textAlign: 'center', height: '66' }}
          //style = {{textAlign:'center'}}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        {/*<div style={styles.root}>
          <GridList
            cellHeight={250}
            style={styles.gridList}
          >

            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={<span>by <b>{tile.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>*/}

        {/*<div>
          {this.props.children}
        </div>*/}

        <Drawer width={300} openSecondary={false} open={this.state.open} >

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
            // style={styless}
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


        </Drawer>
      <div>
        {this.props.children}
      </div>
      </div>


    )
   
  }
}
export default Main;