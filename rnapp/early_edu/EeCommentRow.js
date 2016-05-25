
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
    DateApi,
} from '../comm';

import './EeComment.css';


export default  class EeCommentRow extends BaseComponent {
    render() {

        let one = this.getProps().data;

        let time = this.getProps().time;
        let timeJsx;
        if (time === true) {
            timeJsx = (
                <div className='eecommentrow_time'>
                    <div></div>
                    {DateApi.getTimeFromGive('2342323424')}
                </div>
            );
        }

        return (
            <li>
                <img src={one.user.icon}/>
                <div>
                    {timeJsx}
                    <h2>{one.user.nickname}</h2>
                    <h3>{one.title}</h3>
                </div>
                <div style={{clear: 'both'}}></div>
            </li>
        );
    }
}