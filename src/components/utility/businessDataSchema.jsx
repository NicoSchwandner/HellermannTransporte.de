import React from "react";
import useSiteMetadata from "../../hooks/useSiteMetadata";

const BusinessDataSchema = () => {
  const { businessName, email, phoneNumber } = useSiteMetadata();

  const organizationJsonLd = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: businessName,
    email: email,
    telephone: phoneNumber,
  };

  return <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>;
};

export default BusinessDataSchema;
