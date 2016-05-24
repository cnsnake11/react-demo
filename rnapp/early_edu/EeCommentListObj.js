
'use strict';

import React from 'react';
import {
    BaseLogicObj,
    ListViewApi,
} from '../comm';


export default class EeCommentListObj extends BaseLogicObj {

    constructor(root) {
        super(root);
    }

    init() {

        this.list = new ListViewApi({
            onReachEndNoLoading: () => {
                this.pageQuery();
            }
        });

        this.pageQuery();
    }

    pageQuery() {
        let curPage = this.list.curPage;
        console.log('in page query : curPage = '+ this.list.curPage);

        this.list.startQuery();

        setTimeout(() => {
            // todo mock
            fetch('/mock/data/eedata_comments.json').then((res) => res.json()).then((res) => {

                this.list.endQuery();

                if (curPage === 5) {
                    this.list.setNoData();
                    return;
                }

                let state = {};
                if (curPage === 0) {
                    state.initData = res.data;
                }
                let listData = this.getState().listData.concat(res.data.comments);
                state.listData = listData;
                this.setState(state);
            });
        }, 200);

    }

}