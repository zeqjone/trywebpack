import cssft from '../../css/common/footer.css';
import bt from '../../css/bootstrap/css/bootstrap.min.css';
import React,{Component} from 'react';
import FooterItemA from '../unit/flex_item_footer_a';

class Footer extends Component{
	constructor(props){
		super(props);
		//this.state = {date:new Date};
		this.state = props;
		
		this.itemOnclick = this.itemOnclick.bind(this);
	}
	
	componentDidMount(){
		
	}
	
	itemOnclick(e){
		e.preventDefault();

		var list = document.getElementById('footer').children;
		let i = [...list].findIndex((v,idx,arr)=>{
			return v == e.target || [...v.children].find((vv)=>{
				return vv == e.target;
			});
		})

		this.setState({page:{ active:i} });
	}
	
	
	render(){
		const active = this.state.page.active;
		return (<div className={cssft.footer}>
			<div id="footer" className={bt.container}>
			{
				active == 0 ? (<FooterItemA onClick={this.itemOnclick} text="首页" active="true"/>) : (<FooterItemA onClick={this.itemOnclick} text="首页"/>)
			}{
				active == 1 ? (<FooterItemA onClick={this.itemOnclick} text="详情" active="true"/>) : (<FooterItemA onClick={this.itemOnclick} text="详情"/>)
			}{
				active == 2 ? (<FooterItemA onClick={this.itemOnclick} text="菜单三" active="true"/>) : (<FooterItemA onClick={this.itemOnclick} text="菜单三"/>)
			}{
				active == 3 ? (<FooterItemA onClick={this.itemOnclick} text="菜单第四" active="true"/>) : (<FooterItemA onClick={this.itemOnclick} text="菜单第四"/>)
			}
			</div>
		</div>)
	}
}
export default Footer;