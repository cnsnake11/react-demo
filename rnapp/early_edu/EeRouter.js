
'use strict';

import React from 'react';

import EeHistory from './EeHistory.js';
import EeAudio from './EeAudio.js';
import EeVideo from './EeVideo.js';
import EeVideoAudioList from './EeVideoAudioList.js';
import EeCommentList from './EeCommentList.js';
import EeDoComment from './EeDoComment.js';

export default class EeRouter {

    init() {

        $R.init({});

        $R.reg('EeHistory',() => {
            nav.push({
                name: 'EeHistory',
                page: () => <EeHistory />
            });
        });

        $R.reg('EeAudio',() => {
            nav.push({
                name: 'EeAudio',
                page: () => <EeAudio />
            });
        });

        $R.reg('EeVideo',() => {
            nav.push({
                name: 'EeVideo',
                page: () => <EeVideo />
            });
        });

        $R.reg('EeVideoAudioList',(type) => {
            nav.push({
                name: 'EeVideoAudioList',
                page: () => <EeVideoAudioList type={type}/>
            });
        });

        $R.reg('EeCommentList',() => {
            nav.push({
                name: 'EeCommentList',
                page: () => <EeCommentList />
            });
        });

        $R.reg('EeDoComment',() => {
            nav.push({
                name: 'EeDoComment',
                page: () => <EeDoComment />
            });
        });

    }


}

