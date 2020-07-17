exports.createPages = async ({ actions, graphql }) => {
  const {
    data: { content },
  } = await graphql(`
    query {
      content {
        continents {
          name
          code
          countries {
            code
          }
        }
      }
    }
  `)

  content.continents.forEach(continent => {
    console.log(continent.code)
    actions.createPage({
      path: `/continent/${continent.code}`,
      component: require.resolve(`./src/pages/continents.js`),
      context: {
        code: continent.code,
      },
    })
  })

  content.continents.forEach(continent => {
    continent.countries.forEach(country => {
      actions.createPage({
        path: `/continent/${continent.code}/country/${country.code}`,
        component: require.resolve(`./src/pages/country.js`),
        context: {
          code: country.code,
        },
      })
    })
  })
}
