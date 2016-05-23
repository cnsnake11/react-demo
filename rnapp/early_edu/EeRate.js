
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
} from '../comm';

import './EeRate.css';


export default  class EeRate extends BaseComponent {
    render() {

        return (
            <div className='eerate' style={{marginBottom: '10px'}}>
                <h1>我来打分</h1>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
                <div className='eerate_rate'>打分</div>
            </div>
        );
    }
}

class Star extends BaseComponent {

    render() {
        return (<div className='eestar'></div>);
    }
}

