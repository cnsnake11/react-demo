
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
} from '../comm';

import './EeRate.css';


export default  class EeRate extends BaseComponent {


    componentWillMount() {
        this.state = {
            point: 0
        };
    }


    render() {

        let {onClick} = this.getProps();

        let point = this.getState().point;
        let jsx = [];
        for (let i = 1 ;i <= 5; i++) {
            let cls;
            if (point === (i - 0.5)) {
                cls = 'eestarpoint_05';
            } else if (point < i) {
                cls = 'eestarpoint_0';
            } else {
                cls = 'eestarpoint_1';
            }
            jsx.push(<div onClick={() => {
                this.setState({point: i});
            }} className={cls}></div>);
        }

        return (
            <div className='eerate' style={{marginBottom: '10px'}}>
                <h1>我来打分</h1>

                <div className='eestarrate'>
                    {jsx.map(one => one)}
                </div>

                <div className='eerate_rate'
                     onClick={() => {
                        onClick && onClick();
                     }}>打分</div>
            </div>
        );
    }
}

