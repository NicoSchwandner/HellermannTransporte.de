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
        }
      }
    }
  `);
  // twitterUsername
  // image;

  return data.site.siteMetadata;
};

export default useSiteMetadata;
