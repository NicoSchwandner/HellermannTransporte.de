import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { body, container, heading } from "./layout.module.css";
import Navigation from "./navigation";
import Footer from "./footer";
import Header from "./header";
import Seo from "../utility/seo";
import StaticImports from "../utility/staticImports";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <Seo title={pageTitle} />
      <StaticImports />
      <Header pageTitle={data.site.siteMetadata.title} />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Navigation />
      <Footer />
    </div>
  );
};

export default Layout;
