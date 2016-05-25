
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';
import { render } from 'react-dom';

import {
    BaseComponent,
    Navigator,
} from '../comm';
import EeHome from './EeHome.js';
import EeAudio from './EeAudio.js';

class EeIndex extends BaseComponent {

    componentWillMount() {
        document.getElementById('loading').className='';
    }

    render() {
        return (
            <Navigator ref={(nav) => window.nav = nav} initialRoute={this._getInitRoute()} />
        );
    }

    _getInitRoute() {
        return {
            name: 'home',
            page: () => <EeAudio />
        };
    }
}

render(<EeIndex />, document.getElementById('con'));
