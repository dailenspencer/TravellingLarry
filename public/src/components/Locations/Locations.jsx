import React from 'react';
import LocationsData from '../../../LocationsData';
import {Grid, Row, Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export default class Locations extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

componentDidMount() {
  window.scrollTo(0,0);
  this.lockScroll()
}

componentWillUnmount() {
  this.unlockScroll();
}

lockScroll(){
    var $html = $('html'); 
    var $body = $('body'); 
    var initWidth = $body.outerWidth();
    var initHeight = $body.outerHeight();

    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    $html.data('scroll-position', scrollPosition);
    $html.data('previous-overflow', $html.css('overflow'));
    $html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);   

    var marginR = $body.outerWidth()-initWidth;
    var marginB = $body.outerHeight()-initHeight; 
    $body.css({'margin-right': marginR,'margin-bottom': marginB});
} 

unlockScroll(){
    var $html = $('html');
    var $body = $('body');
    $html.css('overflow', $html.data('previous-overflow'));
    var scrollPosition = $html.data('scroll-position');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);    

    $body.css({'margin-right': 0, 'margin-bottom': 0});
}

handleChange(event,index,value){
  this.setState({value});
  switch(value){
    case 1:
      $('html,body').animate({
        scrollTop: $(".GreenLand-header-fade").offset().top},
      2000);
      break;
    case 2:
      $('html,body').animate({
        scrollTop: $(".Norway-header-fade").offset().top},
      2000);
      break;
    case 3:
      $('html,body').animate({
        scrollTop: $(".Vietnam-header-fade").offset().top},
      2000);
      break;
    case 4:
      $('html,body').animate({
        scrollTop: $(".Space-header-fade").offset().top},
      2000);
      break;
    case 5:
      $('html,body').animate({
        scrollTop: $(".MountKiliminjaro-header-fade").offset().top},
      2000);
      break;
    default:
      break;
  }
}

render(){

  const dropDownStyle = {
    'position': 'fixed',
    'zIndex': '9999',
    'top': '50%',
    'left':'50%',
    'transform':'translateX(-50%) translateY(-50%)'

  }
  const labelStyle = {
    'color': 'white'
  }


  return (
     <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <DropDownMenu value={this.state.value} style={dropDownStyle} labelStyle={labelStyle} onChange={this.handleChange}>
        <MenuItem value={0} primaryText="Locations" />
        <MenuItem value={1} className="menuItemGreenLand" primaryText="GreenLand" />
        <MenuItem value={2} className="menuItemNorway" primaryText="Norway" />
        <MenuItem value={3} className="menuItemVietnam" primaryText="Vietnam" />
        <MenuItem value={4} className="menuItemSpace" primaryText="Australia" />
        <MenuItem value={5} className="menuItemKiliminjaro" primaryText="SouthAfrica" />
      </DropDownMenu>
        </MuiThemeProvider>
      <header className="header-GreenLand">
          <div className="GreenLand-header-fade">
            <h className="SearchConf">Hello</h>
          </div>
        </header>
        <header className="header-Norway">
          <div className="Norway-header-fade"></div>
        </header>
        <header className="header-Vietnam">
          <div className="Vietnam-header-fade"></div>
        </header>
        <header className="header-Space">
          <div className="Space-header-fade"></div>
        </header>
        <header className="header-MountKiliminjaro">
          <div className="MountKiliminjaro-header-fade"></div>
        </header>
     </div>
    );
  }
}

