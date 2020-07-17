import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const {
    content: { country },
  } = data
  console.log(data)
  return (
    <Layout>
      <SEO title="Countries" />
      <h4 className="breadcrumb">
        <Link to="/">Continents</Link> / {country.continent.code} /{" "}
        <Link to={`/continent/${country.continent.code}`}>Countries</Link> /{" "}
        {country.code}
      </h4>
      <div className="card">
        <div>
          Country Name
          <p>{country.name}</p>
        </div>

        <div>
          Country code
          <p>{country.code}</p>
        </div>

        <div>
          Flag
          <p>{country.emoji}</p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Country($code: ID!) {
    content {
      country(code: $code) {
        code
        name
        emoji
        continent {
          code
        }
      }
    }
  }
`
