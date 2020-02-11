import { graphql } from "gatsby"
import React from "react"
import BlogPostTeaser from "../components/blog-post-teaser"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Blog"
        description="This is an overview of all the different blog posts."
        url="https://www.floriangaechter.com/blog/"
        isBlogPost={false}
      />
      <div className="pb-12 mb-12 border-b border-cool-grey-100">
        <h1>Blog</h1>
      </div>
      <h2 className="mb-6">2020</h2>
      {data.year___2020.edges.map(post => (
        <BlogPostTeaser key={post.node.fields.slug} node={post.node} />
      ))}
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    year___2020: allMarkdownRemark(
      filter: { frontmatter: { year: { eq: 2020 } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
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
