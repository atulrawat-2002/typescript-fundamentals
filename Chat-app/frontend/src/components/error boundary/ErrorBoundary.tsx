import { Component, type ErrorInfo, type ReactNode } from "react";


class ErrorBoundary extends Component {

    constructor(props: any) {
        super(props);

        this.state = { 
            hasError: false,
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo)
    }

    render() {

        if( this.state.hasError ) {
            return <div style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'cyan'
            }} > Something went wrong </div>
        }

        return this.props.children

    }

}



export default ErrorBoundary;