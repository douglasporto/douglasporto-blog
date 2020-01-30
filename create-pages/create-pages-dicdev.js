const path = require("path")

function graphqlForDicDevs(graphql, createPage) {
  const blogPost = path.resolve(`./src/templates/blog-dicionary.js`)
  const blog = graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { glob: "**/content/dicdevs/*.md" } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug_dic
                slug
              }
              frontmatter {
                date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
                description
                title
                tags
              }
            }
            next {
              fields {
                slug_dic
              }
              frontmatter {
                title
                date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
              }
            }
            previous {
              fields {
                slug_dic
              }
              frontmatter {
                title
                date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) throw result.errors

    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug_dic,
        component: blogPost,
        context: {
          slug: node.fields.slug,
          // the order is different here because of the DESC order
          previous: next,
          next: previous,
        },
      })
    })
    const postsPerPage = 5
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/dicionary/` : `/dicionary/page/${i + 1}`,
        component: path.resolve("./src/templates/blog-list-dicionary.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
  return blog
}
exports.graphqlForDicDevs = graphqlForDicDevs
