import Head from 'next/head'

import { CMS_NAME } from 'lib/constants'

const Meta = ({ title }: { title?: string }) => {
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
      <meta name="description" content={`Douglas Porto personal blog.`} />
      <meta property="og:image" content="assets/profile/douglas-porto.jpeg" />
    </Head>
  )
}

export default Meta
