
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';
import { render } from 'react-dom';
//import { Router, Route, hashHistory } from 'react-router'
import {
    BaseComponent,
} from '../../comm';
import Navigator from '../../comm/view/Navigator.js';

import './GhIndex.css';

import GhIndexObj from './GhIndexObj.js';


class GhIndex extends BaseComponent {

    //constructor() {
    //    super();
    //}

    componentWillMount() {
        this.state = {
            initData: null,
        };

        this.obj = new GhIndexObj(this);
        this.obj.init();
    }

    render() {

        return (
            <Navigator ref={(nav) => window.nav = nav} initialRoute={this._getInitRoute()} />
        );
    }

    _getInitRoute() {
        return {
            name: 'home',
            page: () => this._getHome(),
        };
    }

    _getHome() {
        return (
            <div>
                <h1 className='title'>干货集中营</h1>

                {this.getState().initData ?
                    <List root={this} data={this.getState().initData.results} />
                    :
                    '努力加载中....'
                }
            </div>
        );
    }
}

class List extends BaseComponent {

    render() {
        let data = this.getProps().data;

        return (
            <ul className='list'>
                {
                    data.map((one) => {
                        return <li onClick={() => {
                            //let path = `/repos`;
                            //
                            //this.getRootProps().history.push({
                            //    pathname: path,
                            //    state: {aaa:'11'}
                            //});

                            //render(<Repos a={this.getRoot()} />, document.getElementById('a'));

                            nav.push({
                                name: 'repos',
                                page: <Repos a={this.getRoot()} />
                            });

                        }}>{one.desc}</li>;
                    })
                }
            </ul>
        );
    }
}

render(<GhIndex />, document.getElementById('content'));

import Repos from './Repos'
//render((
//    <Router history={hashHistory} >
//        <Route path="/" component={GhIndex}/>
//        {/* add the routes here */}
//        <Route path="/repos" component={Repos}/>
//    </Router>
//), document.getElementById('content'))