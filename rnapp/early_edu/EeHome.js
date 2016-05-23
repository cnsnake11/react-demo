
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';
import Slider from 'react-slick';

import {
    BaseComponent,
    Loading,
} from '../comm';

import './EeHome.css';
import EeHomeObj from './EeHomeObj.js';
import EeHeader from './EeHeader.js';
import EeButton from './EeButton.js';

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
                          rightBtnPress={() => alert('播放历史')} />
                <div className='eeheader_height'></div>
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

    render() {

        let data = this.getProps().data;

        if (!data) {
            return null;
        }

        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
        };
        return (
            <Slider {...settings}>
                {
                    data.map((one) => {
                        let style={backgroundImage: `url(${one})`};
                        return (
                            <div style={style} className='eehome_slider_div'>
                                <h1>宝宝：我就喜欢自己玩</h1>
                            </div>
                        );
                    })
                }
            </Slider>
        );
    }

}


class HomeVideoList extends BaseComponent {
    render() {

        let data = this.getProps().data;

        return (
            <div className='eehome_video_list' style={{marginBottom: '10px'}}>
                <h1>早教视频</h1>

                <ul>
                    {
                        data.map((one, index) => {
                            let imgStyle={backgroundImage: `url(${one.img})`};
                            return (
                                <li onClick={() => {this.getRootObj().goVideo()}}>
                                    <div style={imgStyle}></div>
                                    <h2>{one.title}</h2>
                                    <h3>{one.count}次播放</h3>
                                </li>
                            );
                        })
                    }
                    <div style={{clear: 'both'}}></div>
                </ul>

                <EeButton title='更多育儿视频' onClick={() => alert('更多音频')} />
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
                                <li onClick={() => {this.getRootObj().goAudio()}}>
                                    <div style={imgStyle}></div>
                                    <h2>{one.title}</h2>
                                </li>
                            );
                        })
                    }
                    <div style={{clear: 'both'}}></div>
                </ul>

                <EeButton title='更多育儿音频' onClick={() => alert('更多音频')}/>
            </div>
        );
    }
}
