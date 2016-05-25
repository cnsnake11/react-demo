
'use strict';

//引入的顺序要求是 1第三方框架 2自研通用框架 3业务， 这样可以保证打包顺序

import React from 'react';

import {
    BaseComponent,
} from '../comm';

import EeHeader from './EeHeader.js';
import EeButton from './EeButton.js';

import './EeDoComment.css';


export default  class EeDoComment extends BaseComponent {

    componentWillMount() {
        this.maxLength = 300;
        this.state = {
            content: ''
        }
    }


    validate() {

        let title = this.getState().content;

        if (title && title.trim() && title.length <= this.maxLength) {
            return true;
        }
        return false;
    }

    render() {

        return (
            <div>
                <EeHeader title='写评论'/>
                <div className='eeheader_height'></div>
                <div className='eedocomment'>
                    <div className='eedocomment_wrapper'>
                        <textarea placeholder="请输入评论内容" onChange={(e) => {
                            this.setState({content: e.target.value});
                        }}></textarea>
                        <MaxLengthMsg maxLegth={this.maxLength} str={this.state.content}/>
                    </div>
                    {
                        this.validate() ?
                            <EeButton title='提交' theme='blue' />
                            :
                            <EeButton title='提交' theme='gray' />
                    }

                </div>
            </div>

        );
    }
}

class MaxLengthMsg extends BaseComponent {

    render() {

        let str = this.props.str;
        let maxLength = this.props.maxLegth / 1;

        let spanStyle;
        if (str && str.trim() && str.length > maxLength) {// 超出了
            spanStyle = {color: 'red'};
        }

        return (
            <div className='eedocomment_rule'><span style={spanStyle}>{str.length}</span>/{maxLength}</div>
        );
    }

}