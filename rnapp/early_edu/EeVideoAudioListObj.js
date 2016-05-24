
'use strict';

import React from 'react';
import {
    BaseLogicObj,
    ListViewApi,
} from '../comm';


export default class EeVideoAudioListObj extends BaseLogicObj {

    constructor(root) {
        super(root);
    }

    init(name, type) {

        this.name = name;
        this.type = type;

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
            fetch('/mock/data/eedata_history.json').then((res) => res.json()).then((res) => {

                this.list.endQuery();

                if (curPage === 5) {
                    this.list.setNoData();
                    return;
                }

                let state = {};
                let listData = this.getState().listData.concat(res.data.history);

                if(this.name === 'time') {//todo 后边去掉
                    listData.reverse();
                }

                state.listData = listData;
                this.setState(state);
            });
        }, 200);

    }

}