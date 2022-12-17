import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from '../styles/scss/contentbody.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function CANVAS({}) {
  const canvas = useRef(null);
  

  useEffect(() => {
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

    var width = canvas.width = window.innerWidth ,
        height = canvas.height = window.innerHeight;

    window.addEventListener('resize',function(){
      width = canvas.width = window.innerWidth - 10;
      height = canvas.height = window.innerHeight;
    });
    let fv = document.getElementById('fv'); 
    //document.body.appendChild(canvas);
    fv.appendChild(canvas);



    var circ = (4*(Math.sqrt(2)-1)/3);
    var c = circ;

    var count = Math.PI;
    const myNumber = 200; //推移させたい数値の最大値(絶対値)
    const division = 1000; //Date.nowをそのまま使うと周期が早すぎるので、希望の数値で割る
    const digit = 3; //表示したい小数点以降の桁数
    const startTime = Date.now() / division; //アニメーション開始時間
    let elapsedTime = 0; //アニメーション開始時間からの経過時間を格納
    let x = 300;//x座標の初期値を設定(移動させたい範囲の中央)
    let y = 300;//y座標の初期値を設定(移動させたい範囲の中央)
    function drawBezierCircle(cx,cy,r){

      var c;
      var offsetX = 20 * Math.sin(count);
      var offsetY = 15 * Math.cos(count * 2);
      r = r/2;

      count += 0.03;

      ctx.translate(cx,cy); // translate to centerpoint

      ctx.beginPath();

      // top right
      c = circ + ( 0.2 * Math.sin(count) );
      ctx.moveTo(offsetX + 0, offsetY + -r);
      ctx.bezierCurveTo(
        offsetX + c*r, offsetY + -r, 
        offsetX + r, offsetY + -c*r, 
        offsetX + r, offsetY + 0
      );

      // bottom right
      c = circ + ( 0.2 * Math.cos(count) );
      ctx.bezierCurveTo(
        offsetX + r, offsetY + c*r, 
        offsetX + c*r, offsetY + r, 
        offsetX + 0, offsetY + r
      );

      // bottom left
      c = circ + ( 0.2 * Math.sin(count * 2) );
      ctx.bezierCurveTo(
        offsetX + -c*r, offsetY + r, 
        offsetX + -r, offsetY + c*r, 
        offsetX + -r, offsetY + 0
      );

      // top left
      c = circ + ( 0.2 * Math.cos(count + 1) );
      ctx.bezierCurveTo(
        offsetX + -r, offsetY + -c*r, 
        offsetX + -c*r, offsetY + -r, 
        offsetX + 0, offsetY + -r
      );
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      
      const periodX = Math.sin(elapsedTime).toFixed(digit) * myNumber;//-200 〜 +200の間を推移
      const periodY = Math.cos(elapsedTime).toFixed(digit) * myNumber;//-200 〜 +200の間を推移
      
      ctx.fill(); 
    ctx.fillRect(x + periodX, y + periodY, 50, 50);//
    }



function render(){
  requestAnimationFrame(render);

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, width, height);
  //ctx.clip();
  //drawBezierCircle(width * 3/4,height/2,300);
  drawBezierCircle(width/2 ,height/2,300);
 
}

  
  
render();


   
  });
  return (
    <>
      <div id="fv"></div>
    </>
  )
}
