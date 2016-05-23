
'use strict';

import React from 'react';

import BaseComponent from '../base/BaseComponent';

let style = {
    textAlign: 'center',
};

export default class Loading extends BaseComponent {
    render() {
        return (
            <div style={style}>
                努力加载中........
            </div>
        );
    }
}