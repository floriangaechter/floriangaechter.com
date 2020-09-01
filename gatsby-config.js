module.exports = {
  siteMetadata: {
    title: `Florian Gächter`,
    description: `Personal blog of Florian Gächter. This are some things I've learned…`,
    author: `@neither1nor0`,
    siteUrl: `https://www.floriangaechter.com`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 836,
              withWebp: { quality: 80 },
              tracedSVG: {
                color: `#40c3f7`,
                turnPolicy: `TURNPOLICY_MAJORITY`,
              },
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: `•`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=2]": `mt-6 mb-2`,
                "heading[depth=3]": `mt-6 mb-2`,
                "heading[depth=4]": `mt-6 mb-2`,
                paragraph: `mb-4 max-w-xl`,
                pre: `mb-4`,
                "list[ordered=false]": `list-disc mb-4 pl-4 max-w-xl`,
                "list[ordered=true]": `list-decimal mb-4 pl-4 max-w-xl`,
              },
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: null,
              rel: `noreferrer noopener`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: `/rss.xml`,
            title: `www.floriangaechter.com RSS Feed`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-157973279-1`,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "YOUR_SITE_ID",
        matomoUrl: "https://t.floriangaechter.com",
        siteUrl: "https://www.floriangaechter.com",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Florian Gächters Blog`,
        short_name: `flo-blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/floriangaechter.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
