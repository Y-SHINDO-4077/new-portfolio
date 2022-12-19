import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import MeSetion from 'components/me_section'
import PolicySetion from 'components/policy_section'
import ContentBody from 'components/content__body'
import Timeline from 'components/timeline'
import CHART from 'components/chart'
import DNUSetion from 'components/dnu_section'
import NextBTN from 'components/nextbtn'
import READMORE from 'components/readmore'
import styles from '../styles/scss/me.module.scss'

import { ReactElement, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap, Power3 } from "gsap";
import Image from 'next/image'
import topwork from 'images/topwork.webp'

import three from 'images/me_figure1.svg'

export default function ME() {
  return (
      <>
        <Meta pageTitle="ME" pageDesc="About ME | DO"/>
        <div className={styles.overflow}>

       
        <MeSetion/>
        <section className={styles.bg}>
    
      
          {/* <div className={styles.figure}>
            <figure>
                <Image
              src={three}
              alt=""
              layout="responsive"
              sizes="800px"
              priority
              />
            </figure>
          </div> */}
          <PolicySetion title="POLICY" en__content="" ja__content="全体を把握して、分からない仕様・箇所などはすぐに確認する。
          曖昧にしない。
          よりよいクリエイティブを作るためには当たり前ですが、
          いつも徹底しています。"/>
          <PolicySetion title="FUTURE" en__content="" ja__content="フロントエンドを極めたい。
          動くサイトや、ユーザー視点の使いやすいWebサイトを作っていきたい。
          そのためにデザインの素養を磨き中です。

          DNUというプラットフォームを使って、
          さまざまな人がまちをもっと楽しめるように仕掛けていきたい。"/>

          </section> 
       

       
    </div>
    <section>
      <Container>
          <Timeline/> 
      </Container>
    </section>
    <div className={styles.overflow}>     
        
        <section>
        <Container>
          <h2 className={styles.t__left}>Skills</h2>
          <CHART />
        </Container>
        </section>
        <section>
          <Container>
            <h2 className={styles.heading_q}>Qualification</h2>
            <ContentBody Year ="" heading4="マイクロソフトオフィススペシャリスト" heading5="" />
            <ContentBody Year ="" heading4="ITパスポート" heading5="" />
            <ContentBody Year ="" heading4="色彩検定3級・2級" heading5="" />
            <ContentBody Year ="" heading4="HTML5 認定資格" heading5="" />
            <ContentBody Year ="" heading4="校正検定初級（日本エディタースクール）" heading5="" />
          </Container>
        </section>
        <section>
          <Container>
            <Hero
              title="WORKS"
              subtitle=""
            />
            <Image
                src={topwork}
                alt=""
                layout="responsive"
                priority
                />
            <READMORE url="/work" />
          </Container>
        </section>
        
        {/* <DNUSetion linkOn/> */}
    </div>
      </>
  )
}
