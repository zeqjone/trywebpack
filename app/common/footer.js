import cssft from '../../css/common/footer.css';
import React,{Component} from 'react';
import FooterItemA from '../unit/flex_item_footer_a';

class Footer extends Component{
	constructor(props){
		super(props);
		//this.state = {date:new Date};
		this.state = {
			active:props.active
		};
		
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

		this.setState({active:i});
	}
	
	
	render(){
		const active = this.state.active;
		return (<div id="footer" className={cssft.footer}>
			{
				active == 0 ? (<FooterItemA onClick={this.itemOnclick} text="首页" active="true"/>) : (<FooterItemA onClick={this.itemOnclick} text="首页"/>)
			}{
				active == 1 ? (<FooterItemA onClick={this.itemOnclick} text="详情" active="true"/>) : (<FooterItemA onClick={this.itemOnclick} text="详情"/>)
			}{
				active == 2 ? (<FooterItemA onClick={this.itemOnclick} text="购物车" active="true"/>) : (<FooterItemA onClick={this.itemOnclick} text="购物车"/>)
			}{
				active == 3 ? (<FooterItemA onClick={this.itemOnclick} text="个人中心" active="true"/>) : (<FooterItemA onClick={this.itemOnclick} text="个人中心"/>)
			}
		</div>)
	}
}
export default Footer;