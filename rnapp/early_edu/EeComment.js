
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
} from '../comm';

import './EeComment.css';
import EeButton from './EeButton.js';


export default  class EeComment extends BaseComponent {

    render() {
        let data = this.getProps().data;
        return (
            <div className='eecomment'>
                <h1>评论（共{data.comment.counts}条）</h1>

                <EeWantComment root={this} data={data.user} />

                <EeCommentList root={this} data={data.comments} />

                <EeButton title='查看全部评论' onClick={() => alert('全部评论')}/>
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
                <div>我来说几句</div>
            </div>
        );
    }
}

class EeCommentList extends BaseComponent {
    render() {

        let data = this.getProps().data;

        return (
            <ul className='eecommentlist'>
                {
                    data.map((one) => {
                        return (
                            <li>
                                <img src={one.user.icon}/>
                                <div>
                                    <h2>{one.user.nickname}</h2>
                                    <h3>{one.title}</h3>
                                </div>
                                <div style={{clear: 'both'}}></div>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}
