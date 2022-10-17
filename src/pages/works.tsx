import {
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { getAllWorks } from 'lib/apiWorks'
import WorkType from 'types/work'

import Meta from '@/components/meta'
import { WorkCard } from '@/components/WorkCard/WorkCard'

export default function Works({ allWorks }: { allWorks: WorkType[] }) {
  return (
    <>
      <Meta title="Works" />

      <Box borderRadius="lg" mb={6} p={3}>
        <VStack spacing={2} alignItems="baseline">
          <Heading
            as="h3"
            fontSize="lg"
            color={useColorModeValue('purple.500', 'primary.main')}
            variant="section-title"
          >
            Works
          </Heading>
          <Heading as="h6" fontSize="md">
            Here are my freelance jobs
          </Heading>
        </VStack>
        <Box as="section" mt="8">
          <SimpleGrid as="ul" columns={{ md: 2, sm: 1 }} gap={8}>
            {allWorks.map((work, index) => (
              <WorkCard
                key={index}
                title={work.title}
                description={work.description}
                image={work.coverImage}
                slug={work.slug}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  )
}

export const getStaticProps = async () => {
  const allWorks = getAllWorks()
  return {
    props: { allWorks }
  }
}
