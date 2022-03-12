import Author from '@/components/Author/Author'
import Meta from '@/components/meta'

const ItsMe = () => {
  return (
    <>
      <Meta title="It's Me" />

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
