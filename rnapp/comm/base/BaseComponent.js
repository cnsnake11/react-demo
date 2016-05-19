'use strict';

import React, {
    Component,
} from 'react';


class BaseComponent extends Component {

    getProps() {
        return this.props;
    }

    getState() {
        return this.state;
    }

    getRefs() {
        return this.refs;
    }

    // root不保证一定有
    getRoot() {
        return this.props.root;
    }

    setRootState(state) {
        if (!this.getRoot()) {
            throw new Error('root is not defined!');
        }

        this.getRoot().setState(state);
    }

    getRootState() {
        if (!this.getRoot()) {
            throw new Error('root is not defined!');
        }

        return this.getRoot().state;
    }

    getRootProps() {
        if (!this.getRoot()) {
            throw new Error('root is not defined!');
        }

        return this.getRoot().props;
    }

    getRootRefs() {
        if (!this.getRoot()) {
            throw new Error('root is not defined!');
        }

        return this.getRoot().refs;
    }
}

module.exports = BaseComponent;
