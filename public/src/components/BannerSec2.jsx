import React from 'react';
import ReactDOM from 'react-dom';
import Banner2SecLeft from './Banner2SecLeft';
import Banner2SecRight from './Banner2SecRight';


class BannerSec2 extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

  render() {
		return (
        	<div id="BannerSec2" name="BannerSec2">
        		<Banner2SecLeft/>
        		<Banner2SecRight/>
    		</div>
    	)
  	}
}

module.exports = BannerSec2