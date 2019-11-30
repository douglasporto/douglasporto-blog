import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import GridTemplate from "../components/GridTemplate"
import SEO from "../components/seo"

import * as S from "../components/Post/styles"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <GridTemplate>
        <S.PostHeader>
          <S.PostDate>
            {post.frontmatter.date}
            <span> · Leitura de {post.timeToRead} min</span>
          </S.PostDate>
          <S.PostTitle>Title: {post.frontmatter.title}</S.PostTitle>
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        </S.PostHeader>
        <S.MainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </S.MainContent>
      </GridTemplate>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "DD MMM. YYYY", locale: "pt-br")
        description
        tags
        image
        title
        twitter_text
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
