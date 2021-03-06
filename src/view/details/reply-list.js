import React,{Component} from 'react';
import {Card,Avatar,List} from 'antd';
import {Link} from 'react-router-dom';

export default class ReplyList extends Component {

    render(){
        const {replies,replyCount,loading}=this.props;
        return(
            <div className='wrap'>
                <Card
                    loading={loading}
                    title={`${replyCount}条回复`}
                    type='inner'
                >
                    <List
                        className='repliesList'
                        itemLayout='vertical'
                        dataSource={replies}
                        renderItem={(item)=>(
                            <List.Item
                                key={item.id}
                                extra={item.ups.length>0? <span>有{item.ups.length}人觉着很赞</span>:''}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.author.avatar_url}/>}
                                    description={<div className='repliesTitle'><Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link><span>发表于:{item.create_at.split('T')[0]}</span></div>}

                                >
                                </List.Item.Meta>
                                <div dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}></div>
                            </List.Item>
                        )}
                    >

                    </List>

                </Card>
            </div>
        )
    }
}