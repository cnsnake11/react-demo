
'use strict';

import React from 'react';
import {
    BaseLogicObj,
    ListViewApi,
} from '../comm';


export default class EeHistoryObj extends BaseLogicObj {

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
            fetch('/mock/data/eedata_history.json').then((res) => res.json()).then((res) => {

                this.list.endQuery();

                if (curPage === 5) {
                    this.list.setNoData();
                    return;
                }

                let listData = this.getState().listData || [];
                let state = {};
                listData = listData.concat(res.data.history);
                state.listData = listData;
                this.setState(state);
            });
        }, 200);

    }

}