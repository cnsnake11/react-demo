
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
    Loading,
    ReactFlexSlick,
} from '../comm';

let { Slider, Slides, Dots } = ReactFlexSlick;

import './EeHome.css';
import EeHomeObj from './EeHomeObj.js';
import EeHeader from './EeHeader.js';
import EeButton from './EeButton.js';
import EeHistory from './EeHistory.js';
import EeVideoAudioList from './EeVideoAudioList.js';

export default class EeHome extends BaseComponent {

    componentWillMount() {
        this.state = {
            initData: null,
        };

        this.obj = new EeHomeObj(this);
        this.obj.init();
    }

    render() {

        let data = this.getState().initData;

        return (
            <div id='EeHome' >
                <EeHeader title='早教课堂' rightBtn='history'
                          rightBtnPress={() => {
                             $R.go('EeHistory');
                          }} />
                {
                    this.getMain(data)
                }

            </div>
        );
    }

    getMain(data) {
        if (!data) {
            return <Loading />;
        }
        return (
            <div>
                <HomeSlider data={data.sliders} root={this}/>
                <HomeVideoList data={data.videos} root={this}/>
                <HomeAudioList data={data.audios} root={this}/>
            </div>
        );
    }
}

class HomeSlider extends BaseComponent {
    shouldComponentUpdate() {
        return false;
    }

    render() {

        let data = this.getProps().data;

        if (!data) {
            return null;
        }

        return (
            <Slider infinite swipe draggable autoPlay>
                <div></div>
                 <Slides {...this.props}  >
                     {
                         data.map((one) => {
                             let slideStyle = {
                                 width: '100%',
                                 color: 'white',
                                 display: 'flex',
                                 justifyContent: 'center',
                                 alignItems: 'center'
                             };
                             slideStyle.backgroundImage =  `url(${one})`;
                             return (
                                 <div style={slideStyle} className='eehome_slider_div'>
                                     <h1>宝宝：我就喜欢自己玩</h1>
                                 </div>
                             );
                         })
                         }
                </Slides>
                <div></div>
                <Dots />
            </Slider>
        );
    }

}


class HomeVideoList extends BaseComponent {
    render() {

        let data = this.getProps().data;

        return (
            <div className='eehome_video_list' style={{margin: '10px 0'}}>
                <h1>早教视频</h1>

                <ul>
                    {
                        data.map((one, index) => {
                            let imgStyle={backgroundImage: `url(${one.img})`};
                            return (
                                <li onClick={() => $R.go('EeVideo')}>
                                    <div style={imgStyle}></div>
                                    <h2>{one.title}</h2>
                                    <h3>{one.count}次播放</h3>
                                </li>
                            );
                        })
                    }
                    <div style={{clear: 'both'}}></div>
                </ul>

                <EeButton title='更多育儿视频' onClick={() => {
                    $R.go('EeVideoAudioList/video');
                }} />
            </div>
        );
    }
}


class HomeAudioList extends BaseComponent {
    render() {

        let data = this.getProps().data;

        return (
            <div className='eehome_audio_list'>
                <h1>早教音频</h1>

                <ul>
                    {
                        data.map((one, index) => {
                            let imgStyle={backgroundImage: `url(${one.img})`};
                            return (
                                <li onClick={() => $R.go('EeAudio')}>
                                    <div style={imgStyle}></div>
                                    <h2>{one.title}</h2>
                                </li>
                            );
                        })
                    }
                    <div style={{clear: 'both'}}></div>
                </ul>

                <EeButton title='更多育儿音频' onClick={() => {
                        $R.go('EeVideoAudioList/audio');
                }} />
            </div>
        );
    }
}
