import React, {Component} from 'react';

interface Props {
    props: JSX.Element
}

class ErrorBoundry extends Component<{}, {hasError: boolean}>{
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error: unknown, info: React.ErrorInfo) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops. That is not good.</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;