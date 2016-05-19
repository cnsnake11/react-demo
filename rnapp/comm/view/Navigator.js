
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
                <div className='page' id='bbt_nav_page_0'>
                    {
                        this._renderScene(this.getRootRoute())
                    }
                </div>

                <div className='page hidden' id='bbt_nav_page_1'></div>
            </div>
        );
    }

    push(route) {
        this._routes.push(route);
        ReactDom.render(route.page, document.getElementById('bbt_nav_page_1'));
        this._show(this.$('bbt_nav_page_1'));
        this._hide(this.$('bbt_nav_page_0'));
    }

    pop() {
        this._routes.pop();
        this._show(this.$('bbt_nav_page_0'));
        this._hide(this.$('bbt_nav_page_1'));
        ReactDom.unmountComponentAtNode(this.$('bbt_nav_page_1'));
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

    _renderScene(route) {
        return route.page();
    }

    _show(el) {
        el.className = 'page';
    }

    _hide(el) {
        el.className = 'page hidden';
    }

}

export default Navigator;