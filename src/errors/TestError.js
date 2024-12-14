// ErrorThrowingComponent.jsx
import React from 'react';

const ErrorThrowingComponent = () => {
  throw new Error('This is a test error!');
  return <div>This will never render.</div>;
};

export default ErrorThrowingComponent;
