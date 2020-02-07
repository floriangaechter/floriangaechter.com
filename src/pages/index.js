import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ExternalLink from "../components/external-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostTeaser from "../components/blog-post-teaser"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div className="pb-12 mb-12 border-b border-cool-grey-100">
        <div className="mb-4">
          Hi, I’m
          {` `}
          <h1 className="inline text-base">
            <ExternalLink to="https://twitter.com/neither1nor0">
              Florian
            </ExternalLink>
          </h1>
          {` `}—{` `}I do Frontend. Sometimes Backend as well. But mostly
          Frontend. I’m currently working at{` `}
          <ExternalLink to="https://www.frontify.com/en/">
            Frontify
          </ExternalLink>
          {` `}
          as an Senior Frontend Engineer in the Marketing Team.
        </div>
        <p>This are some things I’ve learned so far…</p>
      </div>
      <h2 className="mb-6">Posts</h2>
      {posts.map(({ node }) => {
        return <BlogPostTeaser key={node.fields.slug} node={node} />
      })}
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
