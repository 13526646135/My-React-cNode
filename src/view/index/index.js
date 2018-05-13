import React,{Component} from 'react';
import {Menu,Row,Col,Pagination} from 'antd';
import {Link,withRouter} from 'react-router-dom';
import IndexList from "./index-list";
class Index extends Component {

    constructor(args){
        super(args);
        let now=this.getNow(this.props.location);
        this.state={
            now
        }
    }
    getNow(location){
        let now=location.pathname.split('/')[2];
        return now;
    }
    shouldComponentUpdate(nextProps){
        let now=this.getNow(nextProps.location);
        if (now!==this.state.now){
            this.setState({
                now
            });
            return false;
        }
        return true;
    }

    render(){
        let tab=this.props.match.params.id;

        return (
            <Row className='wrap'>
                <Col md={6}>
                    <Menu className='indexMenu' selectedKeys={[this.state.now]}>
                        <Menu.Item key='all'><Link to='/index/all'>全部</Link></Menu.Item>
                        <Menu.Item key='good'><Link to='/index/good'>精华</Link></Menu.Item>
                        <Menu.Item key='ask'><Link to='/index/ask'>问答</Link></Menu.Item>
                        <Menu.Item key='share'><Link to='/index/share'>分享</Link></Menu.Item>
                        <Menu.Item key='job'><Link to='/index/job'>招聘</Link></Menu.Item>
                        <Menu.Item key='dev'><Link to='/index/dev'>测试</Link></Menu.Item>
                    </Menu>
                </Col>
                <Col md={18} className='context'>
                    <IndexList tab={tab}></IndexList>

                </Col>
            </Row>
        )
    }
}
export default withRouter((props)=>{
    let {location,match}=props;
    return  <Index location={location} match={match}></Index>
})