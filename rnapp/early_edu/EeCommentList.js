
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
    Loading,
} from '../comm';

import EeHeader from './EeHeader.js';
import EeCommentRow from './EeCommentRow.js';
import EeCommentListObj from './EeCommentListObj.js';
//import './EeCommentList.css';

export default  class EeCommentList extends BaseComponent {

    componentWillMount() {
        this.state = {
            listData: [],
            initData: null,
        };

        this.obj = new EeCommentListObj(this);
        this.obj.init();
    }

    render() {
        return (
            <div style={{height: '100%', overflow: 'auto'}}
                onScroll={(e) => {
                    this.obj.list.exeWhenScroll(e);
                }}
            >
                <EeHeader title='评论'/>
                {
                    this.getMain()
                }
            </div>
        );
    }


    getMain() {

        let initData = this.getState().initData;

        if (!initData) {
            return <Loading />;
        }

        return (
            <div style={{padding: '15px 10px 0 10px', background: '#fff'}}>

                <span style={{fontSize: '12px', color: '#999'}}
                    >评论：{initData.comment.counts}</span>

                <ul className='eecommentlist'>
                    {
                        this.getState().listData.map((one) => <EeCommentRow time={true} data={one}/>)
                    }
                </ul>
            </div>
        );
    }
}