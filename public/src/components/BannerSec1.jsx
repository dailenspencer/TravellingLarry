import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Banner1SecLeft from './Banner1SecLeft';
import Banner1SecRight from './Banner1SecRight';

export default (props) => {

return (
    <div id="BannerSec1" name="BannerSec1">
    	<Banner1SecLeft/>
    	<Banner1SecRight/>
    </div>
)
};