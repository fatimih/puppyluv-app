import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ title, description }) {
  // Set default values if not provided
  const pageTitle = title || 'Puppy Luv - San Diego';
  const pageDescription = description || 'Professional dog walking services in San Diego.';
  
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
    </Helmet>
  );
}

export default SEO;