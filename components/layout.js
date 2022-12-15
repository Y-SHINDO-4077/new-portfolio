import Header from 'components/header'
import Footer from 'components/footer'
import {gsap} from 'gsap'
import { useEffect } from 'react'

export default function Layout({children}){
useEffect(() => {
 //マウスストーカー
//マウスストーカー用のdivを取得
//const stalker = document.getElementById('stalker'); 

//上記のdivタグをマウスに追従させる処理
// document.addEventListener('mousemove', function (e) {
//     stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
// });

//let hovFlag = false;

//マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
// document.addEventListener('mousemove', function (e) {
//     if (!hovFlag) {
//     stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
//     }
// });

//リンクへ吸い付く処理
// const linkElem = document.querySelectorAll('a:not(.no_stick_)');
// for (let i = 0; i < linkElem.length; i++) {
//     //マウスホバー時
//     linkElem[i].addEventListener('mouseover', function (e) {
//         hovFlag = true;

//         //マウスストーカーにクラスをつける
//         stalker.classList.add('hov_');

//         //マウスストーカーの位置をリンクの中心に固定
//         let rect = e.target.getBoundingClientRect();
//         let posX = rect.left + (rect.width / 2);
//         let posY = rect.top + (rect.height / 2);

//         stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

//     });
//     //マウスホバー解除時
//     linkElem[i].addEventListener('mouseout', function (e) {
//         hovFlag = false;
//         stalker.classList.remove('hov_');
//     });
// }

let
cursor = document.getElementById("stalker"),
//follower = document.getElementById("follower"),
link = document.getElementsByClassName("link"),
pos = { x: 0, y: 0 }, // カーソル要素の座標
mouse = { x: pos.x, y: pos.y }, // マウスカーソルの座標
speed = 0.5; // 0.01〜1 数値が大きほど早い

// カーソルの座標を設定する
var cursorSetX = gsap.quickSetter(cursor, "x", "px");
var cursorSetY = gsap.quickSetter(cursor, "y", "px");

// 遅延するカーソルの座標を設定する
// var followerSetX = gsap.quickSetter(follower, "x", "px");
// var followerSetY = gsap.quickSetter(follower, "y", "px");

// マウスカーソル座標を取得する
document.addEventListener("mousemove", function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// レンダリングする
gsap.ticker.add(function() {
  
  var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  cursorSetX(pos.x);
  cursorSetY(pos.y);
  // followerSetX(pos.x);
  // followerSetY(pos.y);
});





}, [])
  return (
    <>
      <Header/>
        <div id="stalker" style={{pointerEvents: 'none'}}></div>
        {/* <div id="follower" style={{pointerEvents: 'none'}}></div> */}
        <main>
         {children}
        </main>
      <Footer/>
      
    </>
  )
}