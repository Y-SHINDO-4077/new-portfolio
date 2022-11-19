import Meta from 'components/meta'
import { getAllPosts } from 'lib/api'
import Container from 'components/container'
import React from 'react'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'lib/constants'

import styles from '../styles/scss/Home.module.scss'
import Hero from 'components/hero'
import MVSwiper from 'components/swiper'
import MeSetion from 'components/me_section'
import DNUSetion from 'components/dnu_section'
import READMORE from 'components/readmore'
import NextBTN from 'components/nextbtn'


export default function Home({ posts }) {

 
  return (
    <>
    <Meta />
    <Container large>
      <section className={styles.fvArea}>
        <div className={styles.topTitle}>
          <Hero
          title="Engineering×Design×Town"
          subtitle="ーまちにひもづくものをデザインして、魅力を伝えるー"
          />
        </div>
        <div>
        　<MVSwiper />
        </div>
       
      </section>
    </Container>

    <MeSetion linkOn/>

    <section className={styles.padding}>
      <Container>
          <Hero
            title="WORKS"
            subtitle=""
          />
          <Posts posts={posts} />
          <READMORE url="/work" />
      </Container>
    </section>
    <DNUSetion linkOn/>
    <NextBTN url="/me" sec_title="ME" />
  </>
  )
}

export async function getStaticProps() {
    const posts = await getAllPosts(4)
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