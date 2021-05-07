import React from "react"
import { Animated } from "react-animated-css"

import { graphql } from "gatsby"

import GridTemplate from "../components/GridTemplate"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"
import PostItems from "../components/PostItems"
import Search from "../components/Search"
import SEO from "../components/seo"

const BlogList = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog/" : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  const postList = props.data.allMarkdownRemark.edges

  const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_ONLY_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
  }

  const content = () => {
    return (
      <>
        {postList.map(
          (
            {
              node: {
                frontmatter: { date, description, tags, title },
                timeToRead,
                fields: { slug },
              },
            },
            index
          ) => (
            <Animated
              animationIn="bounceInRight"
              animationOut="zoomOutDown"
              animationInDuration={1000 + index * 1000}
              animationOutDuration={1000}
              isVisible={true}
            >
              <PostItems
                slug={slug.substr(5)}
                date={date}
                timeToRead={timeToRead}
                title={title}
                tags={tags}
                description={description}
              />
            </Animated>
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
      </>
    )
  }

  return (
    <Layout>
      <SEO title="Home" />
      <GridTemplate>
        <Search
          algolia={algolia}
          callback={content()}
          props={props}
          placeholder="Pesquisar no Blog..."
        />
      </GridTemplate>
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { glob: "**/content/posts/*.md" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
            description
            title
            tags
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
