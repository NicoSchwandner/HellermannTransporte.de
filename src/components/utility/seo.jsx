import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../../hooks/useSiteMetadata";

const Seo = ({ title, description, pathName, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    phoneNumber /*, twitterUsername */,
    email,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: pathName ? `${siteUrl}/${pathName}` : `${siteUrl}`,
    phoneNumber: phoneNumber,
    email: email,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </Helmet>
  );
};

export default Seo;
