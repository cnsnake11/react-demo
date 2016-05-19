import React from 'react'

export default React.createClass({

    componentDidMount(){
        // this.props.a.setState({initData: null});
    },

    render() {
        return <h1 onClick={() => {
            nav.pop();
        }}>back</h1>
    }
})