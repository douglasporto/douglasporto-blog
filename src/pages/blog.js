import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import GridTemplate from "../components/GridTemplate"
import PostItems from "../components/PostItems"
import SEO from "../components/seo"

const BlogPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostListBlog {
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
    `
  )
  const postListBlog = allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <GridTemplate>
        {postListBlog.map(
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

export default BlogPage
