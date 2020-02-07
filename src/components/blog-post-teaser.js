import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import Tag from "./tag"
import { ReactComponent as InternalLinkIcon } from "../images/internal-link.svg"

const BlogPostTeaser = ({ node }) => {
  const title = node.frontmatter.title
  return (
    <article
      key={node.fields.slug}
      className="mb-6 pb-6 border-b border-cool-grey-100"
    >
      <header className="mb-2">
        <h3>
          <Link to={`/blog${node.fields.slug}`}>{title}</Link>
        </h3>
        <small className="text-cool-grey-400">{node.frontmatter.date}</small>
        <div className="-ml-1">
          {node.frontmatter.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>
      <section>
        <div className="max-w-xl">
          <p
            className="mb-2"
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description,
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
}

BlogPostTeaser.propTypes = {
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
}

export default BlogPostTeaser
