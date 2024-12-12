import React from 'react';
import ErrorFallbackPage from './ErrorFallbackPage';
import NetworkIssue from './NetworkIssue';
class ErrorBoundary extends React.Component {
  state = { 
    hasError: false,
    errorType: null 
  };

  static getDerivedStateFromError(error) {
    // Determine error type
    if (error.name === 'NetworkError') {
      return { 
        hasError: true, 
        errorType: 'network' 
      };
    }
    return { 
      hasError: true, 
      errorType: 'unknown' 
    };
  }

  render() {
    if (this.state.hasError) {
      switch(this.state.errorType) {
        case 'network':
          return <NetworkIssue />;
        case 'unknown':
        default:
          return <ErrorFallbackPage />;
      }
    }

    return this.props.children;
  }
}
export default ErrorBoundary;