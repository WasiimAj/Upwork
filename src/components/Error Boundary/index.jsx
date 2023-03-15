import React from "react";


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
    return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
        return <img 
            style={{display:'flex', margin:'3% auto'}}
            src="https://cdn.dribbble.com/users/1078347/screenshots/2799566/media/8a4ae0833c5e06c34e48b87c7583dc2d.png?compress=1&resize=800x600&vertical=top" 
            alt="Error" />;
        }
    
        return this.props.children; 
    }
}

export default ErrorBoundary;