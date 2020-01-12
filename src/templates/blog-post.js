import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import Comments from "@components/Comments"
import FooterBlog from "@components/FooterBlog"
import Layout from "@components/Layout"
import * as S from "@components/Post/styles"
import RecommendedPosts from "@components/RecommendedPosts"
import SEO from "@components/seo"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.next
  const previous = pageContext.previous
  const featuredImgFluid = post.frontmatter.image.childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={
          post.frontmatter.image
            ? `https://douglasporto.com.br${post.frontmatter.image.publicURL}`
            : "https://douglasporto.com.br/assets/default.jpeg"
        }
      />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date}
          <span> · Leitura de {post.timeToRead} min</span>
        </S.PostDate>
        <S.PostTitle>Title: {post.frontmatter.title}</S.PostTitle>
        <Img fluid={featuredImgFluid} />
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
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
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        category
        date(formatString: "DD MMM. YYYY", locale: "pt-br")
        description
        tags
        image {
          id
          publicURL
          childImageSharp {
            fluid(maxWidth: 1280, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        twitter_text
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
