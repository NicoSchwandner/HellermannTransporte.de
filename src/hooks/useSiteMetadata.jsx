import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          phoneNumber
          email
          address
          businessName
          owner
        }
      }
    }
  `);
  // twitterUsername
  // image;

  return data.site.siteMetadata;
};

export default useSiteMetadata;
