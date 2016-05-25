
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';
import { render } from 'react-dom';

import {
    BaseComponent,
    Navigator,
} from '../comm';
import EeHome from './EeHome.js';

import EeHistory from './EeHistory.js';
import EeAudio from './EeAudio.js';
import EeVideo from './EeVideo.js';
import EeVideoAudioList from './EeVideoAudioList.js';
import EeCommentList from './EeCommentList.js';
import EeDoComment from './EeDoComment.js';

class EeIndex extends BaseComponent {

    componentWillMount() {
        document.getElementById('loading').className='';

        $R.init({});

        $R.reg('EeHistory',() => {
            nav.push({
                name: 'EeHistory',
                page: () => <EeHistory />
            });
        });

        $R.reg('EeAudio',() => {
            nav.push({
                name: 'EeAudio',
                page: () => <EeAudio />
            });
        });

        $R.reg('EeVideo',() => {
            nav.push({
                name: 'EeVideo',
                page: () => <EeVideo />
            });
        });

        $R.reg('EeVideoAudioList',(type) => {
            nav.push({
                name: 'EeVideoAudioList',
                page: () => <EeVideoAudioList type={type}/>
            });
        });

        $R.reg('EeCommentList',() => {
            nav.push({
                name: 'EeCommentList',
                page: () => <EeCommentList />
            });
        });

        $R.reg('EeDoComment',() => {
            nav.push({
                name: 'EeDoComment',
                page: () => <EeDoComment />
            });
        });

    }

    render() {

        return (
            <Navigator ref={(nav) => window.nav = nav} initialRoute={this._getInitRoute()} />
        );
    }

    _getInitRoute() {
        return {
            name: 'home',
            page: () => <EeHome />
        };
    }
}

render(<EeIndex />, document.getElementById('con'));
