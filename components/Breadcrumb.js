import React from 'react';

import { Link } from 'react-router';

const Breadcrumb = ({previousStep}) => {
  return (
    <div className="arrow-back">
      <Link to={previousStep}> ↩ </Link>
    </div>
  )
}

export default Breadcrumb;
