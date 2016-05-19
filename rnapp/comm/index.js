'use strict';

import './base/normal.css';

import React from 'react';
import  'whatwg-fetch'; // 引入fetch，自动绑定到window，其它js不用引入了

/**
 * 统一的对外发布出口
 * 业务使用只require这一个类即可
 */
let BbtReact = {

    // base
    BaseLogicObj: require('./base/BaseLogicObj'),
    BaseComponent: require('./base/BaseComponent'),

    // view
    //Navigator: require('./view/Navigator'), // 不知道为什么不好用，有空再解决

};

module.exports = BbtReact;
