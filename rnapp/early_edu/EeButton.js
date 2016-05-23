
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
} from '../comm';

import './EeButton.css';


export default  class EeButton extends BaseComponent {
    render() {

        let {title, onClick, theme} = this.getProps();

        if (theme) {
            theme = 'eebutton_' + theme;
        }

        let className = 'eebutton ' + theme;


        return (
            <div className={className} onClick={() => onClick()}>
                {title}
            </div>
        );
    }
}