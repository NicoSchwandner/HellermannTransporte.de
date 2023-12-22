import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { container, heading } from "./layout.module.css";
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
        {pageTitle ? <h1 className={heading}>{pageTitle}</h1> : null}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
