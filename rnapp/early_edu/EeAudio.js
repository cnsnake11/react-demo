
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
    Loading,
} from '../comm';

import EeHeader from './EeHeader.js';
import EeComment from './EeComment.js';
import EeRecVideo from './EeRecVideo.js';
import EeAudioObj from './EeAudioObj.js';
import './EeAudio.css';


export default  class EeAudio extends BaseComponent {

    componentWillMount() {
        this.state = {
            initData: null,
        };

        this.obj = new EeAudioObj(this);
        this.obj.init();
    }

    render() {

        return (
            <div>
                <EeHeader title='如何解决家中有两包吃醋打架的问题'/>
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
              <EeAudioDetail root={this} data={initData.video}/>
              <EeRecVideo root={this} data={initData.video2}/>
              <EeComment root={this} data={initData}/>
          </div>
        );
    }
}

class EeAudioDetail extends BaseComponent{
    render() {

        let data = this.getProps().data;
        let imgStyle={backgroundImage: `url(${data.img})`};

        return (
            <div className='eeaudio_detail' style={{marginBottom: '10px'}}>

                <div className='eeaudio_preview' style={imgStyle}></div>

                <div className='eeaudio_player'>
                    <h1>听听宝宝树的专家们对这个问题的解释吧：</h1>

                    <div className='eeaudio_player_icon'></div>

                    <div>
                        02:00
                        <div>进度条</div>
                        08:08
                    </div>

                </div>
            </div>
        );
    }
}