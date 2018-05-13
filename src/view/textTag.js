import React,{Component} from 'react';
import {Tag} from 'antd';
const tabs={
    top:{
        color:'magenta',
        text:'置顶'
    },
    good:{
        color:'geekblue',
        text:'精华'
    },
    job:{
        color:'cyan',
        text:'职业'
    },
    share:{
        color:'purple',
        text:'分享'
    },
    ask:{
        color:'orange',
        text:'问答'
    },
    dev:{
        color:'blue',
        text:'测试'
    }
}

export default class TextTag extends Component {
    getTabg=(data)=>{
        if (data.top){
            return 'top';
        }else if(data.good){
            return 'good';
        }else {
            return data.tab;
        }
    }
    render(){
        let nowTag=tabs[this.getTabg(this.props.data)];
        return(
            <Tag color={nowTag.color}>{nowTag.text}</Tag>
        )
    }
}