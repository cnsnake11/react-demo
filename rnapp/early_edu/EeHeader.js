
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
} from '../comm';

import './EeHeader.css';

export default class EeHeader extends BaseComponent {

    render() {
        return (
            <div className='eeheader'>
                <div className='left back' onClick={() => alert('back')}></div>
                {this.props.title}
                {this._getRightBtn()}
            </div>
        );
    }

    _getRightBtn() {

        let {rightBtn, rightBtnPress} = this.getProps();

        if (rightBtn === 'history') {
            return <div className='right history' onClick={() => rightBtnPress()}></div>;
        }

        return <div className='right'></div>;

    }

}