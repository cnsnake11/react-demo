
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
            initData: null,
        };

        this.obj = new EeCommentListObj(this);
        this.obj.init();
    }

    render() {
        return (
            <div id='EeCommentList' style={{height: '100%', overflow: 'auto'}}
                onScroll={(e) => {
                    var panel = document.getElementById("EeCommentList");
                    var scrollTop,maxScroll=0;
                    scrollTop = panel.scrollTop;
                    maxScroll = panel.scrollHeight - panel.offsetHeight;
                    if(scrollTop >= maxScroll){
                        console.log("滚动到底了 ");
                        return false;
                    }
                    if(scrollTop <=0){
                        console.log("滚动到顶了 ");
                        return false;
                    }
                }}
            >
                <EeHeader title='评论'/>
                <div className='eeheader_height'></div>
                {
                    this.getMain()
                }
            </div>
        );
    }


    getMain() {

        let initData = this.getState().initData;

        if (!initData) {
            return <Loading />
        }

        return (
            <div style={{padding: '15px 10px'}}>

                <span style={{fontSize: '12px', color: '#999'}}
                    >评论：{initData.comment.counts}</span>

                <ul className='eecommentlist'>
                    {
                        initData.comments.map((one) => <EeCommentRow data={one}/>)
                    }
                </ul>
            </div>
        );
    }
}