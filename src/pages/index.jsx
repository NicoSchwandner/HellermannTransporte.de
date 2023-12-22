import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { Layout, Welcome } from "components";

const IndexPage = () => {
  return (
    <Layout>
      <Welcome />
      {/* <div>
        <p>Willkommen bei Hellermann Transporte e.K.</p>
        <StaticImage
          alt="Alexander Hellermann, Eigentümer und Geschäftsführer von Hellermann Transporte e.K."
          src="../images/profile.png"
        />
      </div> */}
    </Layout>
  );
};

export default IndexPage;
