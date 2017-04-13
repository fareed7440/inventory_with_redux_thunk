import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Main from './components/main'
import LoginContainer from './containers/admloginCon'
import store from './store/store'
import { Provider } from 'react-redux';
import AddproductContainer from './containers/addproductCon'
import StoreContainer from './containers/storeCon'
import {
  browserHistory, Router, Route, IndexRoute, IndexRedirect, Link, IndexLink
} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export class Routing extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Provider store={store}>
            <Router history={browserHistory}>
           
         
                <Route exact path="/" component={LoginContainer}></Route>
                <Route path="/main" component={Main}></Route>
                 <Route path="/storeCon" component={StoreContainer}></Route>
                 <Route path="/addproductCon" component={AddproductContainer}></Route>

           
            </Router>


          </Provider>
        </MuiThemeProvider>

      </div>
    )
  }
}



ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);
