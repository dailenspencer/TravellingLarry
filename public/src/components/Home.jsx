import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import ThemeManager from 'material-ui/styles/themeManager';
import Colors from 'material-ui/styles/colors';
import Carousel from './Carousel';
import BannerSec1 from './BannerSec1';
import ParallaxSec2 from './ParallaxSec2';
import BannerSec2 from './BannerSec2';
import ParallaxSec3 from './ParallaxSec3';
import Footer from './Footer';
import Locations from './Locations/Locations'

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scroller   = Scroll.scroller


class Home extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  
  componentWillUnmount() {
      [].forEach.call(document.querySelectorAll('.parallax-mirror'),function(e){
        e.parentNode.removeChild(e);
      });
  }

  render() {
    return (
        <div id="MainBody">
          <Carousel/>
          <BannerSec1/>
          <ParallaxSec2/>
          <ParallaxSec3/>
          <BannerSec2/>
          <Footer/>
        </div>
        
    );
  }
}

module.exports = Home;
