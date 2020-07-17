import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const {
    content: { countries },
  } = data
  const { code } = pageContext
  return (
    <Layout>
      <SEO title="Countries" />
      <h4 className="breadcrumb">
        <Link to="/">Continents</Link> / {code} / Countries
      </h4>
      <div>
        {countries.map(country => (
          <Link
            key={country.code}
            className="link"
            to={`/continent/${code}/country/${country.code}`}
          >
            {country.name}
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Countries($code: String) {
    content {
      countries(filter: { continent: { eq: $code } }) {
        code
        name
      }
    }
  }
`
