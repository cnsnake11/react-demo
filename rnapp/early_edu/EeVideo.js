
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
    Loading,
} from '../comm';

import EeHeader from './EeHeader.js';
import EeRate from './EeRate.js';
import EeComment from './EeComment.js';
import EeRecVideo from './EeRecVideo.js';
import EeVideoObj from './EeVideoObj.js';
import './EeVideo.css';


export default  class EeVideo extends BaseComponent {

    componentWillMount() {
        this.state = {
            initData: null,
        };

        this.obj = new EeVideoObj(this);
        this.obj.init();
    }

    render() {

        return (
            <div>
                <EeHeader theme='transparent'/>
                {
                    this.getMain()
                }
            </div>
        );
    }

    getMain() {

        let initData = this.getState().initData;

        if (!initData) {
            return <Loading />
        }

        return (
          <div>
              <EeVideoDetail root={this} data={initData.video}/>
              <EeRate root={this}/>
              <EeRecVideo root={this} data={initData.video2}/>
              <EeComment root={this} data={initData}/>
          </div>
        );
    }
}

class EeVideoDetail extends BaseComponent{
    render() {

        let data = this.getProps().data;
        let imgStyle={backgroundImage: `url(${data.img})`};

        return (
            <div className='eevideo_detail' style={{marginBottom: '10px'}}>

                <div className='eevideo_preview' style={imgStyle}>
                    <div></div>
                </div>
                <div className='eevideo_play'></div>

                <div className='eevideo_title'>
                    <h1>{data.title}</h1>
                    综合分值 <StarPoint point='3.5' /> {data.counts}次播放
                </div>
            </div>
        );
    }
}

class StarPoint extends BaseComponent {

    render() {
        let point = this.getProps().point / 1;

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
            jsx.push(<div className={cls}></div>);
        }

        return (
            <div className='eestarpoint'>{jsx.map(one => one)}</div>
        );
    }

}