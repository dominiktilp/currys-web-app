import React from 'react';

import { Link } from 'react-router';

const Breadcrumb = ({previousStep}) => {
  return (
    <div className="back-button">
      <Link to={previousStep}> ↩ </Link>
    </div>
  )
}

export default Breadcrumb;
