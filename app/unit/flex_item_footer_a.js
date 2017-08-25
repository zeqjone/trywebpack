import React from 'react';
import ft from '../../css/common/footer.css';
function FooterItemA(props){
	if(props.active){
	return (<a href="javascript:;" onClick={props.onClick} className={ft.item + ' ' + ft.active} >
	<i className="iconfont"></i>
	{props.text}</a>);
	}
	else{
	return (<a href="javascript:;" onClick={props.onClick} className={ft.item} >
	<i className="iconfont"></i>
	{props.text}</a>);
	}
}
export default FooterItemA