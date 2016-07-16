import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import MainMessage from './MainMessage';


class Carousel extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

  componentDidMount() {
      $('#parallax-window').parallax({
        imageSrc: 'images/CoastLine.jpg'
      });
  }

  render() {

      return (
        <div id="Carousel">
          <Nav/>
          <div id={"parallax-window"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-image-src={"images/CoastLine.jpg"} data-natural-width={"1400"} data-natural-height={"900"}>
            <div class="parallax-slider">
              <MainMessage/>
              <h id = "CoastLineLocation">North Shore, Oahu</h>
            </div>
          </div>
          <div class="bounce"></div>
        </div>
    	)
  	}
}

module.exports = Carousel;


