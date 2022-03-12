import Head from 'next/head'

import { CMS_NAME } from 'lib/constants'

type MetaProps = {
  title?: string
  description?: string
  image?: string
}
const Meta = ({ title, description, image }: MetaProps) => {
  const ogImage = image || 'assets/profile/douglas-porto.jpeg'
  const ogDescription = description || 'Douglas Porto Personal Blog'

  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
        rel="stylesheet"
      />
      <title>
        {title && `${title} - `}
        {CMS_NAME}
      </title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/douglas-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/douglas-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/douglas-icon.png"
      />
      <link rel="shortcut icon" href="/favicon/douglas-icon.png" />
      <meta name="theme-color" content="#ED64A6" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:title" content={title || CMS_NAME} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content={ogImage} />
      <meta name="twitter:creator" content="Douglas Porto" />
      <meta name="twitter:title" content={title || CMS_NAME} />
      <meta name="twitter:description" content={ogDescription} />
    </Head>
  )
}

export default Meta
