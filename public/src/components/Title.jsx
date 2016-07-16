import React from 'react';

export default (props) => {

const TitleStyle = {
	width: '15%',
	height: '100%',
	top: '4px',
	bottom: '4px',
	right: '0px',
	marginRight: '0px',
	paddingRight: '0px',
	backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    outline: 'none',
    display: 'inline',
}







return (
	<div class="TitleDiv" style={TitleStyle}>
		<img src={'images/ohm.png'} id="OhmImg"/>
	</div>
	
)
 };