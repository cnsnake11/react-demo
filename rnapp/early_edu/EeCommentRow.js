
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
} from '../comm';

import './EeComment.css';


export default  class EeCommentRow extends BaseComponent {
    render() {

        let one = this.getProps().data;

        return (
            <li>
                <img src={one.user.icon}/>
                <div>
                    <h2>{one.user.nickname}</h2>
                    <h3>{one.title}</h3>
                </div>
                <div style={{clear: 'both'}}></div>
            </li>
        );
    }
}