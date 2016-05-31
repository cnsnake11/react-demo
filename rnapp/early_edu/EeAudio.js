
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
            initData: null
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

    componentWillMount() {

        this.state = {
            canplay: true,
            duration: 0,
            playing: false
        };

        this.audioId = ''+Math.random();
    }

    componentDidMount() {
        let a = this.audio = document.getElementById(this.audioId);
        a.oncanplay = () => {
            this.setState({
                canplay: true,
                duration: a.duration
            });
        };
    }

    render() {

        let data = this.getProps().data;
        let imgStyle={backgroundImage: `url(${data.img})`};

        let clsIcon = '';
        if (this.getState().playing === true) {
            clsIcon = 'eeaudio_player_rotate';
        }

        return (
            <div className='eeaudio_detail' style={{marginBottom: '10px'}}>

                <div className='eeaudio_preview' style={imgStyle}></div>

                <div className='eeaudio_player'>
                    <h1>听听宝宝树的专家们对这个问题的解释吧：</h1>

                       {
                        this.getState().canplay === true ?
                            <div className={'eeaudio_player_icon ' + clsIcon} onClick={() => {
                                let a = this.audio;
                                if (this.getState().playing === false) {
                                    a.play();
                                    this.setState({playing: true});
                                } else {
                                    a.pause();
                                    this.setState({playing: false});
                                }

                            }}></div>
                            :
                            null
                        }

                    <div className='eeaudio_player_status'>
                        <span className='left'>00:00</span>
                        <div className='eeaudio_player_progress'><div></div></div>
                        <span className='right'>{this.getState().duration}</span>
                    </div>

                </div>

                <audio src={data.audio} id={this.audioId}></audio>

            </div>
        );
    }
}