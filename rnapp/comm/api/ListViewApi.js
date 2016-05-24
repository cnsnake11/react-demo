'use strict';

import React from 'react';

import './ListViewApi.css';

export default class ListViewApi {

    constructor(opt) {
        this.opt = opt;

        this.curPage = 0;
        this.loading = false;
        this.noData = false;

        this.wrapper = null;
        this.loadingMsg = null;
    }

    _setLoadingMsg(msg) {

        if (!this.wrapper) {
            return;
        }

        if (!this.loadingMsg) {
            this.loadingMsg = document.createElement("div");
            this.loadingMsg.className = 'listview_loading_msg';
            this.wrapper.appendChild(this.loadingMsg);
        }

        this.loadingMsg.innerHTML = msg;
    }

    startQuery() {
        this.loading = true;
        this._setLoadingMsg('努力加载中...');

    }

    endQuery() {
        this.loading = false;
        this.curPage = this.curPage + 1;
        this._setLoadingMsg(' ');
    }

    setNoData() {
        this.noData = true;
        this._setLoadingMsg('没有更多啦~');
    }

    exeWhenScroll(e) {
        var panel = this.wrapper = e.target;
        var scrollTop,maxScroll=0;
        scrollTop = panel.scrollTop;
        maxScroll = panel.scrollHeight - panel.offsetHeight;
        if(scrollTop >= maxScroll){

            // console.log("滚动到底部了 ");
            this.opt.onReachEnd && this.opt.onReachEnd();

            if (this.noData === true) {
                console.log("滚动到底部了,已经没有数据了。");
                return;
            }

            if (this.loading === false) {
                console.log("滚动到底部了,没有进行中的请求。");
                this.loading = true;
                this.opt.onReachEndNoLoading && this.opt.onReachEndNoLoading();
            } else {
                console.log("滚动到底部了,有进行中的请求。");
            }
        }
        //if(scrollTop <=0){
        //    console.log("滚动到顶了 ");
        //}
    }

}
