import React,{Component} from 'react';
import {Layout,Row,Col,Divider,Icon,Dropdown,Button} from 'antd';
import {Link} from 'react-router-dom';

import NavMenu from './navMenu';

export default class MainHeader extends Component {

    render(){
        return (
            <Layout.Header>
                <Row className='wrap'>
                    <Col md={6} xs={24}>
                        <h1 id='logo'>cNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider className='navDivider' type='vertical'></Divider>
                        <NavMenu className='mdMenu' mode='horizontal'></NavMenu>
                    </Col>
                    <Col md={0} xs={24} className='navMenu' >
                        <Dropdown placement='bottomRight' trigger={['click','touchend']} overlay={
                            <NavMenu className='xsMenu' mode='vertical'></NavMenu>
                        }>
                            <Button><Icon type='bars'/></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
        )
    }
}