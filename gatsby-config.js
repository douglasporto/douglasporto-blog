require("dotenv").config()

const path = require(`path`)
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const queries = require("./src/utils/algolia")

const feeds = [
  {
    serialize: ({ query: { site, allMarkdownRemark } }) => {
      return allMarkdownRemark.edges.map(edge => {
        const postUrl = path.join(site.siteMetadata.siteUrl, edge.node.fields.slug)
        return Object.assign({}, edge.node.frontmatter, {
          description: edge.node.frontmatter.description,
          date: edge.node.frontmatter.date,
          url: postUrl,
          guid: postUrl,
          custom_elements: [{ 'content:encoded': edge.node.html }]
        })
      })
    },
    query: `
      {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
                date
                image {
                  absolutePath
                  publicURL
                }
                thumb: image {
                  publicURL
                }
              }
              excerpt(truncate: true, pruneLength: 500, format: HTML)
            }
          }
        }
      }
    `,
    output: '/feed.xml',
    title: 'Douglas Porto - RSS Feed'
  }
]

const plugins = [
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-styled-components`,
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: "gatsby-source-filesystem",
    options: {
      // path: `${__dirname}/content/posts/`,
      path: `${__dirname}/static/assets`,
      name: "uploads",
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/content/posts`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `dicdevs`,
      path: `${__dirname}/content/dicdevs`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-relative-images",
          options: {
            name: "uploads",
          },
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 960,
            linkImagesToOriginal: false,
          },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-remark-lazy-load`,
        `gatsby-remark-responsive-iframe`,
        `gatsby-remark-prismjs`,
      ],
    },
  },
  `gatsby-plugin-sitemap`,
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }],
              })
            })
          },
          query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
          output: '/feed.xml',
          title: 'Douglas Porto - RSS Feed',
        },
      ],
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Douglas Porto`,
      short_name: `Douglas Porto`,
      start_url: `/`,
      background_color: `#1da1f2`,
      theme_color: `#1da1f2`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-netlify-cms`,
]

const algolia = {
  resolve: `gatsby-plugin-algolia-search`,
  options: {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_ADMIN_KEY,
    queries,
    chunkSize: 10000, // default: 1000
    enablePartialUpdates: true,
  },
}
const analytics = {
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: process.env.GOOGLE_ANALYTICS_ID,
    head: false,
  },
}

plugins.push(algolia)
if (process.env.CONTEXT === "production") {
  plugins.push(analytics)
}

module.exports = {
  siteMetadata: {
    title: `Douglas Porto - Web Developer`,
    author: `Douglas Porto`,
    position: "Web Developer",
    description: `Site pessoal e blog de um desenvolvedor Front-end apaixonado por tecnologia.`,
    siteUrl: `https://douglasporto.com.br/`,
    social: {
      twitter: `dgsapenas`,
      twitterLink: `https://twitter.com/dgsapenas`,
      linkedinLink: `https://www.linkedin.com/in/douglasporto/`,
      githubLink: `https://github.com/douglasporto`,
    },
  },
  plugins,
}
