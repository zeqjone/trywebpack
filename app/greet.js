import React,{Component} from 'react';
import config from '../model/user.json';

import css from '../css/home/index.css';

class Greeter extends Component{
	render(){
		return (<div className={css.root}> 
			<h1>hello,{config.name}.</h1>
			<p>age:{config.age}</p>
			</div>);
	}
};
export default Greeter;
