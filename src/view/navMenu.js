import React,{Component} from 'react';
import {Menu,Icon} from 'antd';
import {Link,withRouter} from 'react-router-dom';
class NavMenu  extends Component {
    constructor(args){
        super(args);
        let now=this.getNow(this.props.location);
        this.state={
            now
        }
    }
    getNow(location){
        let now=location.pathname.split('/')[1];
        return now
    }
    shouldComponentUpdate(nextProps){
        let now=this.getNow(nextProps.location);
        if (now!==this.state.now){
            this.setState({
                now
            })
            return false;
        }
        return true;
    }
    render(){
        return(
            <Menu className={this.props.className} mode={this.props.mode} theme='light' selectedKeys={[this.state.now]}>
                <Menu.Item key='index'><Link to='/index/all'><Icon type='home'/>首页</Link></Menu.Item>
                <Menu.Item key='book'><Link to='/book'><Icon type='book'/>教程</Link></Menu.Item>
                <Menu.Item key='about'><Link to='/about'><Icon type="info-circle-o" />关于</Link></Menu.Item>
            </Menu>
        )
    }
}
export default withRouter((props)=>{
    let {mode,className,location}=props
    return <NavMenu mode={mode} className={className} location={location}></NavMenu>
})