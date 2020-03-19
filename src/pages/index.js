import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BlogPostTeaser from "../components/blog-post-teaser"
import ExternalLink from "../components/external-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ReactComponent as Flo } from "../images/floriangaechter.svg"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO
        title="Home"
        description="Personal blog of Florian Gächter. This are some things I've learned…"
        url="https://www.floriangaechter.com/"
        isBlogPost={false}
      />
      <div className="mb-12 border-b border-cool-grey-100">
        <div className="flex items-center sm:items-start flex-col sm:flex-row">
          <div className="sm:mr-12 order-last sm:order-none mt-12 sm:mt-0">
            <Flo className="h-64" />
          </div>
          <div className="order-first sm:order-none">
            <div className="mb-4">
              Hi, I’m
              {` `}
              <h1 className="inline text-base">
                <ExternalLink to="https://twitter.com/neither1nor0">
                  Florian
                </ExternalLink>
              </h1>
              {` `}—{` `}I do frontend. Sometimes backend as well. But mostly
              frontend. I’m currently working at{` `}
              <ExternalLink to="https://www.frontify.com/en/">
                Frontify
              </ExternalLink>
              {` `}
              as an Senior Frontend Engineer in the Marketing Team.
            </div>
            <p>This are some things I’ve learned so far…</p>
          </div>
        </div>
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
