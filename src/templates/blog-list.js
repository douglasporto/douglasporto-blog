import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import GridTemplate from "../components/GridTemplate"
import PostItems from "../components/PostItems"
import Pagination from "../components/Pagination"
import SEO from "../components/seo"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <GridTemplate>
        {postList.map(
          ({
            node: {
              frontmatter: { date, description, tags, title },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItems
              slug={slug}
              date={date}
              timeToRead={timeToRead}
              title={title}
              tags={tags}
              description={description}
            />
          )
        )}
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </GridTemplate>
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            category
            date(formatString: "DD MMM. YYYY", locale: "pt-br")
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
`

export default BlogList
