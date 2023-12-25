import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { container, heading, body, content } from "./layout.module.css";
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
    <div className={body}>
      <div className={container}>
        <Seo title={pageTitle} />
        <StaticImports />
        <Header pageTitle={data.site.siteMetadata.title} />
        <div className={content}>
          <main>
            {pageTitle ? <h1 className={heading}>{pageTitle}</h1> : null}
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
