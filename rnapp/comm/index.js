'use strict';

import './base/normal.css';

import React from 'react';
import  'whatwg-fetch'; // 引入fetch，自动绑定到window，其它js不用引入了

import BaseLogicObj from './base/BaseLogicObj';
import BaseComponent from './base/BaseComponent';
import ListViewApi from './api/ListViewApi';
import Navigator from './view/Navigator';
import Loading from './view/Loading';

let ReactFlexSlick = require('./lib/react-flex-slick/lib/index.js');

/**
 * 统一的对外发布出口
 * 业务使用只require这一个类即可
 */
let BbtReact = {

    // base
    BaseLogicObj,
    BaseComponent,

    //api
    ListViewApi,

    // view
    Navigator,
    Loading,

    // lib
    ReactFlexSlick

};

module.exports = BbtReact;
