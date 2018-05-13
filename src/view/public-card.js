import React,{Component} from 'react';
import {Card} from 'antd';

export default class PublickCard extends Component {

    render(){
        const data=this.props.data;
        return(
            <div className='wrap cardWrap'>
                {data.map((item,index)=>(
                    <Card
                        className='cardList'
                        key={index} title={item.title}
                        type='inner'
                    >
                        <div dangerouslySetInnerHTML={{
                            __html:item.content
                        }}></div>
                    </Card>
                ))}
            </div>
        )
    }
}


