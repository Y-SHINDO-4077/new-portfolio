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
import styles from '../styles/scss/me.module.scss'

import { ReactElement, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap, Power3 } from "gsap";
import Image from 'next/image'
import eyecatch from 'images/about.jpg'
import three from 'images/me_figure.svg'

export default function ME() {

  useEffect(() => {
    const svgs = gsap.utils.toArray('svg');
      // ScrollTrigger.create({
      //   trigger: ".me_circle_area__xfPlv",
      //   markers: false,
      //   start: "top center-=50px",
      //   // toggleClass: { targets: ".me_circle_area", className: "in" },
      //   toggleClass: 'enable',
      // });
      svgs.forEach((svg) => {
        gsap.from(svg, {
          scrollTrigger: {
            start: 'top bottom',
            end: 'bottom top',
            trigger: svg,
            toggleClass: 'in',

            onEnter: () => gsap.to('cirle', {
              fill:'none',
              stroke: '#333333',
              strokeWidth: 1.5,
              strokeDasharray: 1415,
              animationName: 'circle',
              animationDuration:'3s',
              
            }),
            // onLeave: () => gsap.to('svg', {
            //   backgroundColor: '#fff',
            //   duration: 1.4
            // }),
            // onEnterBack: () => gsap.to('svg', {
            //   backgroundColor: '#000',
            //   duration: 1.4
            // }),
            // onLeaveBack: () => gsap.to('svg', {
            //   backgroundColor: '#fff',
            //   duration: 1.4
            // }),

            
          }
        });
      });
  })
  return (
      <>
        <Meta pageTitle="ME" pageDesc="About development activities"/>
        <MeSetion/>
        <section className={styles.bg}>
    
        <div className={styles.circle_area}>
              <div className={styles.enginnering}>
                <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500"  viewBox="0 0 500 500" className={styles.svg}>
                  <circle cx="250" cy="250" r="225"></circle>
                </svg>
              </div>
            <div className={styles.design}>
              <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500"  viewBox="0 0 500 500" className={styles.svg}>
                <circle cx="250" cy="250" r="225"></circle>
              </svg>
            </div>
            <div className={styles.dnu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500"  viewBox="0 0 500 500" className={styles.svg} >
                <circle cx="250" cy="250" r="225"></circle>
              </svg>
            </div> 

          </div>

          </section> 
          <Container>
                    <figure>
                          <Image
                        src={three}
                        alt=""
                        layout="responsive"
                        sizes="1000px"
                        priority
                        />
                      </figure>
          </Container>
        
        <PolicySetion title="POLICY" en__content="Grasp th e whole and immediately check the specifications and parts that 
I do not understand.
Don't be vague.
It is natural to make better creative,
Always thorough." ja__content="全体を把握して、分からない仕様・箇所などはすぐに確認する。
曖昧にしない。
よりよいクリエイティブを作るためには当たり前ですが、
いつも徹底しています。"/>
       
       <Timeline/> 

<PolicySetion title="FUTURE" en__content="I want to master the front end.
I want to create moving sites and easy-to-use websites from the user's point of view.
That's why I'm honing my design skills.

Using a platform called DNU,
I would like to set up so that various people can enjoy the town more." ja__content="フロントエンドを極めたい。
動くサイトや、ユーザー視点の使いやすいWebサイトを作っていきたい。
そのためにデザインの素養を磨き中です。

DNUというプラットフォームを使って、
さまざまな人がまちをもっと楽しめるように仕掛けていきたい。"/>
        <section>
        <Container>
          <h2 className={styles.t__left}>Skills</h2>
          <CHART />
        </Container>
        </section>
        <section>
          <Container>
            <h2 className={styles.t__left}>Qualification</h2>
            <ContentBody Year ="" heading4="Drivers license" heading5="普通自動車免許" />
            <ContentBody Year ="" heading4="Microsoft Office Specialist" heading5="マイクロソフトオフィススペシャリスト" />
            <ContentBody Year ="" heading4="IT Passport" heading5="ITパスポート" />
            <ContentBody Year ="" heading4="Color test grade 3 and 2" heading5="色彩検定3級・2級" />
            <ContentBody Year ="" heading4="HTML5 Professional Certification" heading5="HTML5 認定資格" />
            <ContentBody Year ="" heading4="Calibration proficiency test (Beginner level,Japan Editors School)" heading5="校正検定初級（日本エディタースクール）" />
          </Container>
        </section>
        
        <DNUSetion linkOn/>

        <NextBTN url="/work" sec_title="WORKS"></NextBTN>
      </>
  )
}
