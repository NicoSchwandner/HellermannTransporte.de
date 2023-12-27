import React from "react";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import { container, heading, body, content } from "./layout.module.css";
import Footer from "./footer";
import Header from "./header";
import Seo from "../utility/seo";
import BusinessDataSchema from "../utility/businessDataSchema";
import StaticImports from "../utility/staticImports";

const Layout = ({ pageTitle, children, pathName }) => {
  const { title } = useSiteMetadata();

  return (
    <div className={body}>
      <div className={container}>
        <Seo title={pageTitle} pathname={pathName} />
        <BusinessDataSchema />
        <StaticImports />
        <Header pageTitle={title} />
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
