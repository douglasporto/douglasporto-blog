import React from "react"
import { Animated } from "react-animated-css"

import { useStaticQuery, graphql } from "gatsby"

import Author from "@components/Author"
import ButtonLink from "@components/ButtonLink"
import GridTemplate from "@components/GridTemplate"
import Layout from "@components/Layout"
import * as S from "@components/PageStyles/styles"
import PostItems from "@components/PostItems"
import SEO from "@components/seo"

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
  `)
  const postList = allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <GridTemplate>
        <Animated
          animationIn="flipInX"
          animationOut="zoomOutDown"
          animationInDuration={2000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <Author />
        </Animated>
        <S.Title>Últimas do blog</S.Title>
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
              key={index}
            >
              <PostItems
                slug={slug}
                date={date}
                timeToRead={timeToRead}
                title={title}
                tags={tags}
                description={description}
              />
            </Animated>
          )
        )}
        <ButtonLink to="/blog/">Ver todos os posts</ButtonLink>
      </GridTemplate>
    </Layout>
  )
}

export default IndexPage
