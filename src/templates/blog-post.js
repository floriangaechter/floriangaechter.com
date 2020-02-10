import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header className="pb-12 mb-12 border-b border-cool-grey-100">
          <h1>{post.frontmatter.title}</h1>
          <small className="text-cool-grey-400">{post.frontmatter.date}</small>
          <div className="-ml-1">
            {post.frontmatter.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>
        <section
          className="blog-post"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
