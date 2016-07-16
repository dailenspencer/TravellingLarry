import React from 'react'
import {Route, IndexRoute, Router, browserHistory} from 'react-router'


import App from './src/components/App'
import Locations from './src/components/Locations/Locations'
import Home from './src/components/Home'
import  hashHistory  from 'react-router'

export default (
	<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<IndexRoute component={Home}/>
  			<Route path='/Locations' component={Locations}/>
  		</Route>
    </Router>
)
