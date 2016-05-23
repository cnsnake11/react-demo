
'use strict';

import React from 'react';
import {
    BaseLogicObj,
} from '../comm';

export default class EeCommentListObj extends BaseLogicObj {

    constructor(root) {
        super(root);
    }

    init() {

        // todo mock
        setTimeout(() => {
            fetch('/mock/data/eedata_comments.json').then((res) => res.json()).then((res) => {
                this.setState({initData: res.data});
            });
        }, 200);

    }

}