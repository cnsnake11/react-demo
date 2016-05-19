import React from 'react';
import { render } from 'react-dom';

import comm from '../comm/comm.js';
import css from './index.css';
import Index2 from '../index2/index2.js';


class HelloWorld extends React.Component {
    render() {
        return (
            <div>Hello World 111111111111111

            <p/>
                <Index2 />

                11213123
            </div>
    );
    }
}

render(<HelloWorld />, document.getElementById('content'));