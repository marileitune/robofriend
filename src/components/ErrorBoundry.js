//this component only is helpful when we put the app ito production (doesn't work in development)

import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    //ComponentDidCatch catch some errors in the component. If happens an error, change the state for true.
    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;
