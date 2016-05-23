
'use strict';

import React from 'react';
import {
    BaseLogicObj,
} from '../comm';

import EeVideo from './EeVideo.js';
import EeAudio from './EeAudio.js';

export default class EeHomeObj extends BaseLogicObj {

    constructor(root) {
        super(root);
    }

    init() {

        // todo mock
        setTimeout(() => {
            fetch('/mock/data/eedata_index.json').then((res) => res.json()).then((res) => {
                this.setState({initData: res.data});
            });
        }, 200);

    }

    goVideo() {
        nav.push({
            name: 'EeVideo',
            page: () => <EeVideo />,
        });
    }

    goAudio() {
        nav.push({
            name: 'EeAudio',
            page: () => <EeAudio />,
        });
    }

}