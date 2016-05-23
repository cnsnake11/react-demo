
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
} from '../comm';

import './EeRecVideo.css';


export default  class EeRecVideo extends BaseComponent {
    render() {

        let data = this.getProps().data;
        let imgStyle={backgroundImage: `url(${data.img})`};

        return (
            <div className='eerecvideo' style={{marginBottom: '10px'}}>
                <h1>推荐视频</h1>

                <div className='eerecvideo_left' style={imgStyle}></div>

                <div className='eerecvideo_right'>
                    <h2>{data.title}</h2>
                    <h3>{data.counts}次播放</h3>
                </div>

                <div style={{clear: 'both'}}></div>
            </div>
        );
    }
}
