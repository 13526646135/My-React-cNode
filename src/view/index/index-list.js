import React,{Component} from 'react';
import {List,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import TextTag from '../textTag';


class IndexList extends Component {
    constructor(args){
        super(args)
        this.state={
            page:1,
        }
        this.getData(this.props.tab,this.state.page)
    }
    componentDidMount(){
        console.log(this.props);
    }
    shouldComponentUpdate(nextProps,nextState){
        if (this.state.page!=nextState.page){
            this.getData(nextProps.tab,nextState.page);
            return false;
        }
        if (this.props.tab!==nextProps.tab){
            this.state.page=1;
            this.getData(nextProps.tab,1);
            return false;
        }
        return true;

    }
    getData(tab,page){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"LIST_UPDATA"
            })
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`)
                .then((res)=>{
                        dispatch({
                            type:"LIST_UPDATA_SUCC",
                            data:res.data
                        })
                    })
                .catch((error)=>{
                    dispatch({
                        type:"LIST_UPDATA_ERROR",
                        data:error
                    })
                })
        })
    }
    render(){
        //loading.data,tab,page
        let {loading,data}=this.props;
        let pagination={
            current:this.state.page,
            pageSize:10,
            total:1000,
            onChange:(current)=>{
                this.setState({
                    page:current
                })
            }
        }
        return(
            <div className='indexList'>
                <List
                    loading={loading}
                    dataSource={data}
                    pagination={pagination}
                    renderItem={
                        (item,index)=>(
                            <List.Item actions={[`回复${item.reply_count}`,`访问${item.visit_count}`]}>

                               <List.Item.Meta
                                   avatar={<Avatar src={item.author.avatar_url}/>}
                                   title={
                                       <div>
                                           <TextTag data={item}></TextTag>
                                           <Link to={`/details/${item.id}`}>{item.title}</Link>
                                       </div>

                                   }
                                   description={
                                       <p>
                                           <Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
                                           发表于：{item.create_at.split('T')[0]}
                                       </p>
                                   }
                               />
                            </List.Item>
                        )}
                >

                </List>
            </div>
        )
    }
}
export default connect(state=>state.list)(IndexList)