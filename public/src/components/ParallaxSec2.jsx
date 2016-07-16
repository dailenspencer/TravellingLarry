import React from 'react';
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


class ParallaxSec2 extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
		
	}

	componentDidMount() {
	    $('#parallax-window-section-2').parallax({
        	imageSrc: 'images/Vietnam.jpg'
      	});
	}

	render () {
		return (
			<div id={"parallax-window-section-2"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-image-src={"images/Vietnam.jpg"} data-natural-width={"1400"} data-natural-height={"900"}>
			 	<Link to={"/Locations"} id={"parallaxSec2Link"}> Locations > </Link>
			 	<h id="VietnamLocation">Ban Gloc, Vietnam</h>
    		</div>
		)
	}

}

module.exports = ParallaxSec2;