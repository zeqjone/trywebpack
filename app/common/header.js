import React, {Component} from 'react';

import bt from '../../css/bootstrap/css/bootstrap.min.css';

import hd from '../../css/common/header.css';

class Header extends Component{
	constructor(props){
		super(props);
		this.state = props;
	}
	render(){
		const page = this.state.page;
		return (
			<div className={hd.header}>
				<div className={bt.container}>
					<h5>{page.title}</h5>
					<a className={hd.back} href="javascript:;">
					返回
					</a>
				</div>
			</div>

		)
	}
}
export default Header;