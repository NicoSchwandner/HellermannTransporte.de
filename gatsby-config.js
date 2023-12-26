module.exports = {
  siteMetadata: {
    siteUrl: "https://www.hellermann-transporte.de/",
    title: "Hellermann Transporte e.K.",
    businessName: "Hellermann Transporte e.K.",
    owner: "Inh. Alexander Hellermann",
    description: "Website of Hellermann Transporte e.K.",
    // twitterUsername: "@gatsbyjs",
    // image: "/gatsby-icon.png",
    phoneNumber: "+49 1761 9450 998",
    email: "info@hellermann-transporte.de",
    address: "Im Kleinfeld 13, 76646 Bruchsal",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hellermann Transporte e.K.`,
        short_name: `Hellermann Transporte`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/logo_square.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
