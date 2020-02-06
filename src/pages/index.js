import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div className="pb-12 mb-12 border-b border-cool-grey-100">
        <div className="max-w-xl">
          <h1>Florian Gächter</h1>
          <p>
            I work in Frontend. Sometimes in Backend as well. But mostly
            Frontend. This are some things I've learned so far…
          </p>
        </div>
      </div>
      <h2 className="mb-6">Posts</h2>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            key={node.fields.slug}
            className="mb-6 pb-6 border-b border-cool-grey-100"
          >
            <header className="mb-2">
              <h3>
                <Link to={`blog${node.fields.slug}`}>{title}</Link>
              </h3>
              <small className="text-cool-grey-400">
                {node.frontmatter.date}
              </small>
            </header>
            <section>
              <div className="max-w-xl">
                <p
                  className="mb-2"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
              <Link
                className="text-light-blue-vivid-700 font-bold transition-colors duration-300 ease-in-out hover:text-light-blue-vivid-900"
                to={`blog${node.fields.slug}`}
              >
                Check it out
              </Link>
            </section>
          </article>
        )
      })}
    </Layout>
  )
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
          }
        }
      }
    }
  }
`
