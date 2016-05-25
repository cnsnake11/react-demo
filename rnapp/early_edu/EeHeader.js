
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
} from '../comm';

import './EeHeader.css';

export default class EeHeader extends BaseComponent {

    render() {

        let theme = this.getProps().theme;
        let className = 'eeheader';
        if (theme === 'transparent') {
            className += ' eeheader_transparent';
        }

        return (
            <div>
                <div className={className}>
                    <div className='left back' onClick={() => history.go(-1)}></div>
                    {this._getRightBtn()}
                    <div className='title'>{this.props.title}</div>
                </div>
                {this._getHeightDiv()}
            </div>

        );
    }

    _getHeightDiv() {
        if (this.getProps().theme === 'transparent' || this.getProps().space === false) {
            return null;
        }
        return <div style={{height: '47px'}}></div>;
    }

    _getRightBtn() {

        let {rightBtn, rightBtnPress} = this.getProps();

        if (rightBtn === 'history') {
            return <div className='right history' onClick={() => rightBtnPress()}></div>;
        }

        return <div className='right'></div>;

    }

}