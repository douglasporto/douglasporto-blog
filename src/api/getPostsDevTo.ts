import axios from 'axios'

export const getPosts = async () => {
  const res = await axios.get(
    'https://dev.to/api/articles?username=douglasporto'
  )
  return res.data
}

export interface PostDevTo {
  type_of: string
  id: number
  title: string
  description: string
  readable_publish_date: string
  slug: string
  path: string
  url: string
  comments_count: 2
  public_reactions_count: 6
  collection_id: null
  published_timestamp: string
  positive_reactions_count: 6
  cover_image: string
  social_image: string
  canonical_url: string
  created_at: string
  edited_at: string
  crossposted_at: null
  published_at: string
  last_comment_at: string
  reading_time_minutes: number
  tag_list: string[]
  tags: string
  user: {
    name: string
    username: string
    twitter_username: string
    github_username: string
    user_id: number
    website_url: string
    profile_image: string
    profile_image_90: string
  }
}
