import Head from 'next/head'

import { CMS_NAME } from 'lib/constants'

import Author from '@/components/Author/Author'

const ItsMe = () => {
  return (
    <>
      <Head>
        <title>It&apos;s Me - {CMS_NAME}</title>
      </Head>

      <Author />
    </>
  )
}

export default ItsMe

export const getStaticProps = async () => {
  return {
    props: {}
  }
}
