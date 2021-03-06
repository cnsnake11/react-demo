
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
    Loading,
} from '../comm';

import EeHistoryObj from './EeHistoryObj';
import EeHeader from './EeHeader';
import EeVideoAudioRow from './EeVideoAudioRow.js';


export default  class EeHistory extends BaseComponent {

    componentWillMount() {
        this.state = {
            listData: null,
        }

        this.obj = new EeHistoryObj(this);
        this.obj.init();
    }

    render() {
        return (
            <div style={{height: '100%', overflow: 'auto'}}
                 onScroll={(e) => {
                    this.obj.list.exeWhenScroll(e);
                }}
                >
                <EeHeader title='播放历史'/>
                {
                    this.getMain()
                }
            </div>
        );
    }

    getMain() {

        let listData = this.getState().listData;

        if (!listData) {
            return <Loading />;
        }

        return (
            <ul className='eevideoaudiorow'>
                {
                    this.getState().listData.map((one) => {

                        return (
                            <EeVideoAudioRow data={one} h1={one.title} h2={one.time}
                                h3={'上次你看到' + one.lasttime} fastplay={true}/>
                        );
                    })
                }
            </ul>
        );
    }
}