import Img from "gatsby-image"

import styled from "styled-components"
import media from "styled-media-query"

import * as T from "@styles/typography"
import * as V from "@styles/variables"

export const ImageHeader = styled(Img)`
  display: block;
`

export const PostHeader = styled.header`
  color: var(--themeColor);
  margin: auto;
  /* max-width: 70rem;
  padding: 5rem 5rem 0; */
  ${media.greaterThan("medium")`
    padding-left: ${V.Space.default};
    padding-right: ${V.Space.default};
  `}
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem 1.8rem 0;
  margin: 1rem auto;
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 1.4rem;
`

export const PostDate = styled.p`
  font-size: 1.3rem;
  font-weight: 100;
  color: var(--secondaryColor);
`

export const MainContent = styled.section`
  margin: auto;
  margin-bottom: 10rem;
  ${media.greaterThan("medium")`
    padding-left: ${V.Space.default};
    padding-right: ${V.Space.default};
  `}
  /* max-width: 70rem; */
  /* padding: 2rem 5rem; */
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--primaryColor);
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      border-radius: 3px;
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    border-left: 0.3rem solid var(--themeColor);
    border-radius: 0 0.5rem 0.5rem 0;
    background: var(--bgSecondary);
    padding: 0.5rem 1.875rem;
    margin: 3.125rem auto;
    p {
      color: var(--secondaryColor);
      margin: 0;
    }
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 1.2rem;
    border-radius: 5px;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    ${T.Link} /* border-bottom: 1px dashed #1fa1f2;
    color: #1fa1f2;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #fff;
    }
    &:hover {
      opacity: 0.8;
    } */
  }
`
