module.exports = {
  siteMetadata: {
    siteUrl: "https://www.hellermann-transporte.de/",
    title: "Hellermann Transporte e.K.",
    businessName: "Hellermann Transporte e.K.",
    owner: "Inh. Alexander Hellermann",
    description:
      "Hellermann Transporte e.K. ist ein junges und dynamisches Unternehmen, welches sich auf diverse Arbeiten rund um Transporte, Hausbau, -abriss und Entsorgung spezialisiert hat.",
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
        background_color: `#ffffff`,
        theme_color: `#000000`,
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
