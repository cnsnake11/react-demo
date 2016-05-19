
'use strict';

import React from 'react';
import {
    BaseLogicObj,
} from '../../comm';

export default class GhIndexObj extends BaseLogicObj {

    constructor(root) {
        super(root);
    }

    init() {
        document.getElementById('loading').className='';
        fetch('https://raw.githubusercontent.com/cnsnake11/helloapi/master/android_1').
            then((res) => res.json()).then((res) => {
                this.setState({initData: res});
            });
    }

}