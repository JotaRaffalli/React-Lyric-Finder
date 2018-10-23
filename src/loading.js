import React from 'react';
import Spinner from '../layout/spinner'

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<Spinner>Searching...</Spinner>);
  }
}
export default WithLoading;