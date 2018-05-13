import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import TextDetails from './text-details';
import ReplyList from './reply-list';

class Details extends Component {
    constructor(args){
        super(args);
        this.getData();
    }
    shouldComponentUpdate(nextProps){

        return true;
    }
    getData(){
        let id=this.props.match.params.id;
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:'DETAILS_UPDATA',
             });
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
                .then((res)=>{
                    console.log(res);
                    dispatch({
                        type:'DETAILS_UPDATA_SUCC',
                        data:res.data
                    });
                })
                .catch((error)=>{
                    dispatch({
                        type:'DETAILS_UPDATA_ERROR',
                    });
                })

        })
    }
    render(){
        const {loading,data}=this.props;
        return (
            <div>
                <TextDetails loading={loading} data={data}></TextDetails>
                <ReplyList loading={loading} replies={data.replies} replyCount={data.reply_count}></ReplyList>
            </div>

        )
    }
}
export default connect((state)=>(state.details))(Details)