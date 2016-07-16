import React from 'react';
import NavLeftContainer from './NavLeftContainer';
import Title from './Title';
import NavRightContainer from './NavRightContainer';



export default (props) => {

const NavStyle = {
	backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
	width: '100%',
	height: '50px',
	top: '0px',
	position: 'fixed',
	zIndex: '10'
}

return (
	<div id="NavBar" style={NavStyle}>
		<NavLeftContainer/>
		<NavRightContainer/>
	</div>
)
 };



