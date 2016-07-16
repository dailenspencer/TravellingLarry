import React from 'react';
export default () => {


const NavLeftStyle = {
	backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
	width: '42.5%',
	height: '100%',
	top: '0px',
	bottom: '0px',
	left: '0px',
	display: 'inline',
	float: 'left'
};

const scrollToOurStory = () => {
	$('html,body').animate({
    	scrollTop: $("#BannerSec1").offset().top},
    2000);
};

const scrollToLocations = () => {
	$('html,body').animate({
    	scrollTop: $("#parallax-window-section-2").offset().top},
    2000);
};
return (
	<div class="NavLeftContainer" style={NavLeftStyle}>
		<button id="NavBtnOne" onClick={scrollToLocations}>Locations</button>
		<button id="NavBtnTwo" onClick={scrollToOurStory}>Our Story</button>

	</div>
)
 };