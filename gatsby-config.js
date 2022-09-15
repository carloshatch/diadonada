module.exports = {
  siteMetadata: {
    title: `Dia do Nada`,
    description: ``,
    author: ``,
    siteUrl: `https://www.diadonada.com/`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
        resolve: `gatsby-plugin-react-svg`,
        options: {
            rule: {
                include: /svg/
            }
        }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#161217`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Gochi Hand`,
        ],
        display: 'swap'
      }
    }
  ],
}
