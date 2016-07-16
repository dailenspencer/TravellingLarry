import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import {fullWhite} from 'material-ui/styles/colors';



class ParallaxSec3 extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
	    $('#parallax-window-section-3').parallax({
        	imageSrc: 'images/Shanghai.png'
      	});
	}

	render () {

		const styles = {
			errorStyle: {
				color: fullWhite,
			},
			underlineStyle: {
				borderColor: fullWhite,
				color: fullWhite
			},
			floatingLabelStyle: {
				color: fullWhite,
			},
			floatingLabelFocusStyle: {
				color: fullWhite,
			},
			textFieldStyle : {

			}
		};

		const style = {
			'top': '50%',
			'left': '50%',
			'transform': 'translateX(-50%) translateY(-50%)'
		}

		const floatingLabelStyle = {
			'color':'white',
			'fontSize':'12px',
			'textAlign':'center',
		}

		return (
			<div id={"parallax-window-section-3"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-image-src={"images/Shanghai.png"} data-natural-width={"1400"} data-natural-height={"900"}>
				
				<div id={"mediaform"}method={"POST"}>
					<h id={"mediaformheader"}>Media</h>
					<MuiThemeProvider muiTheme={getMuiTheme()}>
						<TextField style={style}
			      			floatingLabelText="Enter Secret Password"
			      			floatingLabelStyle={floatingLabelStyle}
			      			inputStyle = {{
										'color': 'white',
										'width': '100%' 
									}}
			    		/>
			    	</MuiThemeProvider>
				</div>
				<h id="ShanghaiLocation">Shanghai, China</h>
    		</div>
		)
	}

}

module.exports = ParallaxSec3;