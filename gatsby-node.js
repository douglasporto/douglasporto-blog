const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `blog` })
    createNodeField({
      node,
      name: `slug`,
      value: `blog/${slug.slice(12)}`,
    })
  }
}

// To create the posts pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              category
              date(formatString: "DD [de] MMMM.YYYY", locale: "pt-br")
              description
              tags
              image
              title
              twitter_text
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors

    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
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
        path: i === 0 ? `/blog/` : `/blog/page/${i + 1}`,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}
