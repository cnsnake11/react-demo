
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
} from '../comm';

import './EeComment.css';
import EeButton from './EeButton.js';
import EeDoComment from './EeDoComment.js';
import EeCommentRow from './EeCommentRow.js';
import EeCommentList from './EeCommentList.js';

export default  class EeComment extends BaseComponent {

    render() {
        let data = this.getProps().data;
        return (
            <div className='eecomment'>
                <h1>评论（共{data.comment.counts}条）</h1>

                <EeWantComment root={this} data={data.user} />

                <EeComments root={this} data={data.comments} />

                <EeButton title='查看全部评论' onClick={() => {
                    nav.push({
                        name: 'EeCommentList',
                        page: () => <EeCommentList />
                    });
                }}/>
            </div>
        );
    }
}

class EeWantComment extends BaseComponent {
    render() {

        let data = this.getProps().data;

        return (
            <div className='eewantcomment'>
                <img src={data.icon}/>
                <div onClick={() => {
                    nav.push({
                        name: 'EeDoComment',
                        page: () => <EeDoComment />
                    });
                }}>我来说几句</div>
            </div>
        );
    }
}

class EeComments extends BaseComponent {
    render() {

        let data = this.getProps().data;
        return (
            <ul className='eecommentlist'>
                {
                    data.map((one) => <EeCommentRow data={one}/>)
                }
            </ul>
        );
    }
}
