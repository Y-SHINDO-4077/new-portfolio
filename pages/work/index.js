import Meta from 'components/meta'
import Container from 'components/container'

import Hero from 'components/hero'
import { getAllPosts } from 'lib/api'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'lib/constants'
import PostCategories from 'components/post-categories'
import styles from '../../styles/scss/posts.module.scss'



export default function Work({ posts ,categories}) {
  return (
    <Container>
      <Meta pageTitle="WORKS" pageDesc="実績" />
      <section className={styles.post__padding}>
        <Hero
        title="WORKS"
        subtitle=""  />
        {/* <PostCategories categories={categories} /> */}
        <Posts posts={posts} />
      </section>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  console.log(posts);

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
    post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
      
    },
  }
}
