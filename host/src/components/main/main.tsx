import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const RequestBuilder = lazy(() => import('requestBuilder/RequestBuilder'));
const ResponseViewer = lazy(() => import('responseViewer/ResponseViewer'));

const Main: React.FC = () => {
  return (
    <>
      <ErrorBoundary fallback={<div>Error loading component</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <RequestBuilder />
          <ResponseViewer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Main;