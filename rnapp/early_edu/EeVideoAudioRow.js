
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
} from '../comm';

import './EeVideoAudioRow.css';

export default  class EeVideoAudioRow extends BaseComponent {
    render() {

        let one = this.getProps().data;

        return (
            <li>
                <div style={{backgroundImage: `url(${one.img})`}} className='left'>
                    <div className={'eevideoaudiorow_' + one.type} ></div>
                </div>
                <div className='right'>
                    <h1>{this.getProps().h1}</h1>
                    <h2>{this.getProps().h2}</h2>
                    <h3>
                        {this.getProps().h3}
                        {
                            this.getProps().fastplay === true ?
                                <div className='eevideoaudiorow_fastplay'></div>
                                :
                                null
                        }
                    </h3>
                </div>
                <div style={{clear: 'both'}}></div>
            </li>
        );
    }
}