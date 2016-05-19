import React from 'react';
import { render } from 'react-dom';

class HelloWorld extends React.Component {
    render() {

        let img1 = require('./img/1.png');

        return (
            <div>index22222222222 say hello<img src={img1} /></div>
    );
    }
}

//render(<HelloWorld />, document.getElementById('content'));


export default HelloWorld;