
'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import BaseComponent from '../base/BaseComponent.js';
import './Navigator.css';

class Navigator extends BaseComponent {

    componentWillMount() {
        this._routes = [];
        this._routes.push(this.props.initialRoute);
    }

    $(id) {
        return document.getElementById(id);
    }

    render() {
        return (
            <div className='bbt_nav_wrapper' id='bbt_nav_wrapper'>
                <div id='bbt_nav_page_0' className='bbt_nav_page'>
                    {
                        this._renderScene(this.getRootRoute())
                    }
                </div>
            </div>
        );
    }

    _injectPage(index) {
        this.$('bbt_nav_wrapper').insertAdjacentHTML('beforeend',
            `<div id='bbt_nav_page_${index}' class='bbt_nav_page'></div>`);
    }

    push(route) {
        this._hide(this.getCurrentPageDiv());

        this._routes.push(route);
        this._injectPage(this._routes.length - 1);
        ReactDom.render(this._renderScene(route), this.getCurrentPageDiv());
    }

    pop() {

        let last = this.getLastPageDiv();
        if (!last) { // 已经是根页面
            return ;
        }

        this._show(last);
        this._destory(this.getCurrentPageDiv());

        this._routes.pop();
    }

    getRootRoute() {
        return this._routes[0];
    }

    getCurRoute() {
        return this._routes[this._routes.length - 1];
    }

    getCurrentRoutes() {
        return this._routes;
    }

    getCurrentPageDiv() {
        return this.$(`bbt_nav_page_${this._routes.length - 1}`);
    }

    getLastPageDiv() {
        if (this._routes.length <= 1) { // 已经在根页面
            return null;
        }
        return this.$(`bbt_nav_page_${this._routes.length - 2}`);
    }

    _renderScene(route) {
        return route.page();
    }

    _show(el) {
        el.className = 'bbt_nav_page';
    }

    _hide(el) {
        el.className = 'bbt_nav_page bbt_nav_hidden';
    }

    _destory(page) {
        ReactDom.unmountComponentAtNode(page);
        page.parentNode.removeChild(page);
    }

}

export default Navigator;