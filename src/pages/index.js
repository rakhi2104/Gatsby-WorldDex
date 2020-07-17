import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../styles.css"

const IndexPage = ({ data }) => {
  const {
    content: { continents },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <div>
          {continents.map(continent => {
            return (
              <Link
                className="link"
                to={`/continent/${continent.code}`}
                key={continent.code}
              >
                {continent.name}
              </Link>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Root {
    content {
      continents {
        code
        name
      }
    }
  }
`
