import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import GridTemplate from "../components/GridTemplate"
import PostItems from "../components/PostItems"
import Author from "../components/Author"
import SEO from "../components/seo"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostListIndex {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 2
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
  `)
  const postList = allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <GridTemplate>
        <Author />
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
      </GridTemplate>
      <GridTemplate></GridTemplate>
    </Layout>
  )
}

export default IndexPage
