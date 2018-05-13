import React,{Component} from 'react';
import {Card,Avatar} from 'antd';
import {Link} from 'react-router-dom';

import TextTag from '../textTag';
export default class TextDetails extends Component {

    render(){
        const d=this.props.data;
        const title=(
            <div>
                <h1>{d.title}</h1>
                <div className='detailsTitle'>
                    <TextTag data={d}></TextTag>
                    <Avatar src={d.author.avatar_url}></Avatar>
                    <Link to={`/user/${d.author.loginname}`}>{d.author.loginname}</Link>
                    发表于:{d.create_at.split('T')[0]}
                </div>
            </div>
        )
        return (
            <div className="wrap detailsWrap">
                <Card
                    title={title}
                    loading={this.props.loading}
                >
                    <div dangerouslySetInnerHTML={{
                        __html:d.content
                    }}></div>
                </Card>
            </div>
        )
    }
}