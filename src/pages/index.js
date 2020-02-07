import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"
import { ReactComponent as InternalLinkIcon } from "../images/internal-link.svg"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div className="pb-12 mb-12 border-b border-cool-grey-100">
        <p className="mb-4">
          Hi, I'm
          {` `}
          <h1 className="inline text-base">
            <ExternalLink to="https://twitter.com/neither1nor0">
              Florian Gächter
            </ExternalLink>
          </h1>
          {` `}—{` `}I do Frontend. Sometimes Backend as well. But mostly
          Frontend. I'm currently working at{" "}
          <ExternalLink to="https://www.frontify.com/en/">
            Frontify
          </ExternalLink>{" "}
          as an Senior Frontend Engineer in the Marketing Team.
        </p>
        <p>This are some things I've learned so far…</p>
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
                <Link to={`/blog${node.fields.slug}`}>{title}</Link>
              </h3>
              <small className="text-cool-grey-400">
                {node.frontmatter.date}
              </small>
              <div className="-ml-1">
                {node.frontmatter.tags.map(tag => (
                  <span className="inline-block bg-light-blue-vivid-100 text-light-blue-vivid-800 text-xs px-1 mx-1 rounded text-white font-bold">
                    {tag}
                  </span>
                ))}
              </div>
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
                className="text-light-blue-vivid-700 font-bold transition-colors duration-300 ease-in-out hover:text-light-blue-vivid-900 flex items-center"
                to={`/blog${node.fields.slug}`}
              >
                Check it out
                <InternalLinkIcon className="ml-1 h-3" />
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
            tags
          }
        }
      }
    }
  }
`
