import React, {Component} from 'react';

import hd from '../../css/home/header.css';

class Header extends Component{
	render(){
		return (
			<div className={hd.header}>
				<div className="container">
					<a href="javascript:;">返回</a>
				</div>
			</div>
			
		)
	}
}
export default Header;