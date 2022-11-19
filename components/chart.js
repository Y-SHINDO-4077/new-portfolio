import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from 'styles/scss/contentbody.module.scss'

export default function CHART({}) {
  const canvasEl = useRef(null);
  const canvasEl2 = useRef(null);

  const colors = {
    black: {
      default: "rgba(33,33, 33, 1)",
      half: "rgba(33,33, 33, 0.5)",
      quarter: "rgba(33,33, 33, 0.25)",
      zero: "rgba(33,33, 33, 0)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.black.half);
    gradient.addColorStop(0.65, colors.black.quarter);
    gradient.addColorStop(1, colors.black.zero);

    const weight = ['3','3', '2.5', '2.5','2.5', '2.5', '2.5','2','0.5','0.5','0.3','0.3','0.3','0.3'];

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
      "Movable Type",
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
          borderColor: colors.black.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.black.default,
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
            render: 'image',
            images: [
                { src: '../../images/Group.svg', width: 65, height: 65 },
                { src: '../../images/Group-2.svg', width: 65, height: 65 },
                { src: '../../images/Group-3.svg', width: 65, height: 65 },
                { src: '../../images/Group-4.svg', width: 65, height: 65 }
            ],
       }
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

    const weight2 = ['3','3', '3', '0.5','0.5', '0.5'];

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
          borderColor: colors.black.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.black.default,
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
      <h4>Program Languages </h4>
      <canvas id="myChart" ref={canvasEl} height="300" />
      <h4>Design Software</h4>
      <canvas id="myChart2" ref={canvasEl2} height="100" />
    </>
  )
}
