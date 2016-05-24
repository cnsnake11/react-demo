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
        this.loadingMsg = document.createElement("div");
        this.loadingMsg.className = 'listview_loading_msg';
    }

    startQuery() {
        this.loading = true;
        if (this.wrapper) {
            this.wrapper.appendChild(this.loadingMsg);
            this.loadingMsg.innerHTML = '努力加载中.....';
        }

    }

    endQuery() {
        this.loading = false;
        this.curPage = this.curPage + 1;

        if (this.wrapper) {
            this.wrapper.appendChild(this.loadingMsg);
            this.loadingMsg.innerHTML = ' ';
        }
    }

    setNoData() {
        this.noData = true;

        if (this.wrapper) {
            this.wrapper.appendChild(this.loadingMsg);
            this.loadingMsg.innerHTML = '没有数据了~';
        }
    }

    exeWhenScroll(e) {
        var panel = this.wrapper = e.target;
        var scrollTop,maxScroll=0;
        scrollTop = panel.scrollTop;
        maxScroll = panel.scrollHeight - panel.offsetHeight;
        if(scrollTop >= maxScroll){

            console.log("滚动到底部了 ");
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
