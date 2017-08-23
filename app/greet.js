import React,{Component} from 'react';
import config from '../model/user.json';

class Greeter extends Component{
	render(){
		return (<div> 
			hello,{config.name}
			</div>);
	}
};
export default Greeter;
