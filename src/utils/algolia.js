const postQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/content/posts/" } }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
          description
          title
          tags
        }
        timeToRead
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const dicQuery = `{
  posts: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/content/dicdevs/" } }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug_dic
        }
        frontmatter {
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
          description
          title
          tags
        }
        timeToRead
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr => {
  return arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
}

const settings = { attributesToSnippet: [`excerpt: 20`] }

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings,
  },
  {
    query: dicQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME_DICDEV,
    settings,
  },
]

module.exports = queries
