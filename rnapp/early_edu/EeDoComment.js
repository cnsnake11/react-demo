
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
} from '../comm';

import EeHeader from './EeHeader.js';
import EeButton from './EeButton.js';

import './EeDoComment.css';


export default  class EeDoComment extends BaseComponent {
    render() {

        return (
            <div>
                <EeHeader title='写评论'/>
                <div className='eeheader_height'></div>
                <div className='eedocomment'>
                    <div className='eedocomment_wrapper'>
                        <textarea placeholder="请输入评论内容"></textarea>
                        <div className='eedocomment_rule'>0/300</div>
                    </div>
                    <EeButton title='提交' theme='blue' />
                </div>
            </div>

        );
    }
}