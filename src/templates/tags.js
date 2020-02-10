// Components
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Layout from "../components/layout"
import BlogPostTeaser from "../components/blog-post-teaser"

const Tags = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? `` : `s`
  } tagged with "${tag}"`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="pb-12 mb-12 border-b border-cool-grey-100">
        <h1>{tagHeader}</h1>
      </div>
      {edges.map(({ node }) => {
        return <BlogPostTeaser key={node.fields.slug} node={node} />
      })}
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
  location: PropTypes.object.isRequired,
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            tags
          }
        }
      }
    }
  }
`
