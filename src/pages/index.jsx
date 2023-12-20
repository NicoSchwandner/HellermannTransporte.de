import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Layout } from "components";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair" src="../images/clifford.jpg" />
    </Layout>
  );
};

export default IndexPage;
