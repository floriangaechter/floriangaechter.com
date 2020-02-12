import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"

const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  title,
  image,
  description,
  date,
  modified,
  logo,
}) => {
  const schemaOrgJSONLD = [
    {
      "@context": `http://schema.org`,
      "@type": `WebSite`,
      url: url,
      name: title,
    },
  ]

  return isBlogPost
    ? [
        ...schemaOrgJSONLD,
        {
          "@context": `https://schema.org`,
          "@type": `BreadcrumbList`,
          itemListElement: [
            {
              "@type": `ListItem`,
              position: 1,
              item: {
                "@id": `https://www.floriangaechter.com/blog/`,
                name: `Blog`,
              },
            },
            {
              "@type": `ListItem`,
              position: 2,
              item: {
                "@id": url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          "@context": `https://schema.org`,
          "@type": `BlogPosting`,
          url,
          headline: title,
          image,
          description,
          inLanguage: `en-US`,
          isFamilyFriendly: `true`,
          author: {
            "@type": `Person`,
            name: `Florian Gächter`,
            url: `https://www.floriangaechter.com/`,
          },
          creator: {
            "@type": `Person`,
            name: `Florian Gächter`,
            url: `https://www.floriangaechter.com/`,
          },
          publisher: {
            "@type": `Organization`,
            url: `https://www.floriangaechter.com/`,
            name: `Florian Gächter`,
            logo: {
              "@type": `ImageObject`,
              url: logo,
              width: `512`,
              height: `512`,
            },
          },
          mainEntityOfPage: `true`,
          datePublished: date,
          dateModified: modified,
        },
      ]
    : schemaOrgJSONLD
}

const SEO = ({
  description,
  lang,
  meta,
  title,
  url,
  date,
  modified,
  ogImage: ogImageProp,
  isBlogPost,
  keywords,
}) => {
  const { site, ogImageDefault, logoDefault } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        ogImageDefault: file(relativePath: { eq: "ogimage.jpg" }) {
          childImageSharp {
            fixed(height: 1200, width: 1200) {
              src
            }
          }
        }
        logoDefault: file(relativePath: { eq: "campside.png" }) {
          childImageSharp {
            fixed(height: 512, width: 512) {
              src
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const ogImage =
    ogImageProp ||
    site.siteMetadata.siteUrl.concat(ogImageDefault.childImageSharp.fixed.src)
  const ogTitle = title || site.siteMetadata.title
  const logo = site.siteMetadata.siteUrl.concat(
    logoDefault.childImageSharp.fixed.src
  )

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost,
    url,
    title,
    image: ogImage,
    description,
    logo,
    date,
    modified,
  })

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: ogTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        { name: `twitter:image`, content: ogImage },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string,
  modified: PropTypes.string,
  ogImage: PropTypes.string,
  isBlogPost: PropTypes.bool.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default SEO
