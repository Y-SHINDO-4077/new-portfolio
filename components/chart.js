import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from '../styles/scss/contentbody.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function CHART({}) {
  const canvasEl = useRef(null);
  const canvasEl2 = useRef(null);

  const colors = {
    black: {
      default: "rgba(33,33, 33, 1)",
      half: "rgba(33,33, 33, 0.75)",
      quarter: "rgba(33,33, 33, 0.5)",
      zero: "rgba(33,33, 33, 0.5)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    },
    white: {
      default: "rgba(255,255,255, 1)",
      half: "rgba(255,255,255, 0.75)",
      quarter: "rgba(255,255,255, 0.5)",
      zero: "rgba(255,255,255, 0.5)"
    },

  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    

    let gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.black.half);
    gradient.addColorStop(0.65, colors.black.quarter);
    gradient.addColorStop(1, colors.black.zero);

    let dark = document.documentElement.getAttribute("data-theme");
    console.log(dark);
    if(dark !== null){
      let gradient = ctx.createLinearGradient(255, 255, 255, 600);
      gradient.addColorStop(0, colors.white.half);
      gradient.addColorStop(0.65, colors.white.quarter);
      gradient.addColorStop(1, colors.white.zero);
      console.log(dark);
    }


    const weight = ['3','3', '2.5', '2.5','2.5', '2.5', '2.5','2','0.3','0.3','0.3','0.3','0.3'];

    const labels = [
      "HTML",
      "CSS",
      "Sass",
      "WordPress",
      "PHP",
      "Javascript",
      "jQuery",
      "Shopify(liquid)",
      "Laravel",
      "CakePHP",
      "Next.js",
      "MicroCMS",
      "React"
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: "",
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.white.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.white.default ,
          pointRadius: 3
        }
      ]
    };
    var options = {
      indexAxis: 'y',
      scales: {
          x:{
              min: 0
          }
      },
      plugins: {
       legend: {
        display: false,
        labels: {
          font: {
              size: 16,
              family:'Futura',
              
          }
      }
       },
      },
  };
    const config = {
      type: "bar",
      data: data,
      options: options,
    };
    const myLineChart = new Chart(ctx, config);



    const ctx2 = canvasEl2.current.getContext("2d");
    

    const gradient2 = ctx2.createLinearGradient(0, 16, 0, 600);
    gradient2.addColorStop(0, colors.black.half);
    gradient2.addColorStop(0.65, colors.black.quarter);
    gradient2.addColorStop(1, colors.black.zero);

    const weight2 = ['3','3', '3', '0.3','0.3', '0.3'];

    const labels2 = [
      "XD",
      "Illustrator",
      "Photoshop",
      "InDesign",
      "After Effect",
      "Figma",
      
    ];
    const data2 = {
      labels: labels2,
      datasets: [
        {
          backgroundColor: gradient2,
          label: "",
          data: weight2,
          fill: true,
          borderWidth: 2,
          borderColor: colors.white.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.white.default,
          pointRadius: 3
        }
      ]
    };
    const config2 = {
      type: "bar",
      data: data2,
      options: options,
    };
   
    const myLineChart2 = new Chart(ctx2, config2);

    return function cleanup() {
      myLineChart.destroy();
      myLineChart2 .destroy();
    };

   
  });
  return (
    <>
      <h4 className={styles.fadeinUp}>Program Languages </h4>
      <canvas id="myChart" ref={canvasEl} height="300" />
      <h4 className={styles.fadeinUp}>Design Software</h4>
      <canvas id="myChart2" ref={canvasEl2} height="200" />
    </>
  )
}
