
'use strict';

/**
 * 业务逻辑对象基类
 * 封装了对this.root的初始化和校验
 * 提供了一系列取值赋值接口
 */
class BaseLogicObj {


    constructor(root) {
        if (!root) {
            console.error('实例化BaseLogicObj必须传入root组件对象.');
        }
        this.root = root;
    }

    getRoot() {
        return this.root;
    }

    getState() {
        return this.root.state;
    }

    setState(state) {
        this.root.setState(state);
    }

    getRefs() {
        return this.root.refs;
    }

    getProps() {
        return this.root.props;
    }

}

module.exports = BaseLogicObj;
