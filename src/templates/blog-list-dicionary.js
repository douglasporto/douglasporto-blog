import React from "react"
import { Animated } from "react-animated-css"

import { graphql } from "gatsby"

import GridTemplate from "../components/GridTemplate"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"
import PostItems from "../components/PostItems"
import Search from "../components/Search"
import SEO from "../components/seo"

const BlogListDicionary = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/dicionary/" : `/dicionary/page/${currentPage - 1}`
  const nextPage = `/dicionary/page/${currentPage + 1}`

  const postList = props.data.allMarkdownRemark.edges

  const algolia = {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_ONLY_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME_DICDEV,
  }

  const content = () => {
    return (
      <>
        {postList.map(
          (
            {
              node: {
                frontmatter: { description, tags, title },
                timeToRead,
                fields: { slug_dic },
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
                slug={slug_dic}
                timeToRead={timeToRead}
                title={title}
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
          placeholder="Pesquisar no dicionário..."
        />
      </GridTemplate>
    </Layout>
  )
}

export const query = graphql`
  query PostListDicionary($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { glob: "**/content/dicdevs/*.md" } }
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
            slug_dic
          }
        }
      }
    }
  }
`

export default BlogListDicionary
