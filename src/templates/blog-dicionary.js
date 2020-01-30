import React from "react"

import { graphql } from "gatsby"

import Comments from "@components/Comments"
import FooterBlog from "@components/FooterBlog"
import Layout from "@components/Layout"
import * as S from "@components/Post/styles"
import RecommendedPosts from "@components/RecommendedPosts"
import SEO from "@components/seo"

const BlogPostDicionary = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.next
  const previous = pageContext.previous

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <S.PostHeader>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <FooterBlog />
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Dicionary($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        category
        date(formatString: "DD MMM. YYYY", locale: "pt-br")
        description
        tags
        title
        twitter_text
      }
      html
      timeToRead
    }
  }
`

export default BlogPostDicionary
