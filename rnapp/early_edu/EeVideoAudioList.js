
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
    Loading,
} from '../comm';

import EeHeader from './EeHeader.js';
import EeVideoAudioRow from './EeVideoAudioRow.js';
import EeVideoAudioListObj from './EeVideoAudioListObj.js';
import './EeVideoAudioList.css';

export default  class EeVideoAudioList extends BaseComponent {

    componentWillMount() {
        this.state = {
            tabActive: 'count',
            canInit_count: true,
            canInit_time: false
        };
    }

    render() {
        return (
            <div style={{height: '100%', overflow: 'auto'}}
                onScroll={(e) => {

                    this.scroller = e.target;

                    if (this.getState().tabActive === 'count') {
                        this.list_count && this.list_count.exeWhenScroll(e);
                    } else {
                        this.list_time && this.list_time.exeWhenScroll(e);
                    }

                }}
            >
                <EeHeader title='早教视频'/>
                <EeTab root={this}
                       onClick={(name) => {

                            if (this.scroller) {
                                this['scrollTop_'+this.getState().tabActive] = this.scroller.scrollTop;
                                console.log('记录上一次：scrollTop_'+this.getState().tabActive +'='+this['scrollTop_'+this.getState().tabActive]);
                                this.scroller.scrollTop = 0;
                            }

                            let state = {
                                tabActive: name
                            };
                            state['canInit_' + name] = true;
                            this.setState(state);

                            if (this.scroller && this['scrollTop_'+name]) {
                                console.log('设置这一次：scrollTop_'+name +'='+ this['scrollTop_'+name]);
                                this.scroller.scrollTop = this['scrollTop_'+name];
                            }
                       }}/>

                <ListWrapper name='count'
                             root={this}
                             show={this.getState().tabActive === 'count'}
                             canInit={this.getState().canInit_count}/>
                <ListWrapper name='time'
                             root={this}
                             show={this.getState().tabActive === 'time'}
                             canInit={this.getState().canInit_time}/>

            </div>
        );
    }
}

class ListWrapper extends BaseComponent {
    render() {

        if (this.getProps().canInit === false) {
            return null;
        }

        return (
            <List {...this.getProps()} />
        );
    }
}


class List extends BaseComponent {

    componentWillMount() {
        this.state = {
            listData: []
        };
        let name = this.getProps().name;
        this.obj = new EeVideoAudioListObj(this);
        this.obj.init(name);
        this.getRoot()['list_' + name] = this.obj.list;
    }


    render() {

        let listData = this.getState().listData;

        if (listData.length === 0) {
            return <Loading />;
        }

        let style;
        if (this.getProps().show === false) {
            style = {
                display: 'none'
            }
        }
        return (
            <ul className='eevideoaudiorow' style={style}>
                {
                    listData.map((one) => <EeVideoAudioRow data={one}
                                                       h1={one.title}
                                                       h2={one.counts+'次播放'}
                                                       h3={'上线时间：'+one.time}/>)
                }
            </ul>
        );
    }
}


class EeTab extends BaseComponent {
    render() {
        return (
            <div>
                <ul className='eetab'>
                    <EeTabBtn title='播放最多' name='count' {...this.getProps()}/>
                    <EeTabBtn title='最新上线' name='time' {...this.getProps()}/>
                </ul>
                <div style={{height: '44px'}}></div>
            </div>
        );
    }
}

class EeTabBtn extends BaseComponent {
    render() {

        let {title, onClick, name} = this.getProps();

        let clsName;

        let active = name === this.getRootState().tabActive;

        if (active === true) {
            clsName = 'eetab_active';
        }

        return (
            <li className={clsName}>
                <div onClick={() => onClick(name)}>
                    {title}
                </div>
            </li>
        );
    }
}