import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not found"
      description="You just hit a route that doesn't exist... the sadness."
      url="https://www.floriangaechter.com/404/"
      isBlogPost={false}
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
