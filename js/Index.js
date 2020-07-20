// 弹出层
var video1 = document.getElementById("video1");
var play1 = document.getElementById("play1");
var close1 = document.getElementById("close1");
var poplayer = document.getElementById("poplayer");
var poplogin = document.getElementById("poplogin");
function playvideo1() {
    poplayer.style.display = "block";
    video1.style.display = "block";
}
function loginpop() {
    poplayer.style.display = "block";
    poplogin.style.display = "block";
}
function close1video1() {
    video1.style.display = "none";
    poplayer.style.display = "none";
    poplogin.style.display = "none";
}
//抽奖模块
var lottery = document.getElementById("swfcontent_start");
var number = 0;
var number1 = 0;
lottery.onclick = function () {
    autoplay3();
}
//对于白框left和top的改变
function directionshift() {
    var leap = document.getElementById("swfcontent_hover");
    leap.style.display = "block";
    leap.style.left = number + "px";
    leap.style.top = number1 + "px";

}
//向右和下移动的定时器
var timer1 = null;
var time = 50;
function autoplay3() {
    timer1 = setInterval(function () {
        directionshift();
        if (number < 680 && number1 == 0) {
            number += 340;
        } else if (number1 < 500 && number != 0) {
            number1 += 250;
        } else if (number <= 680 && number > 0) {
            number -= 340;
        } else if (number == 0 && number1 > 0) {
            number1 -= 250;
        }
        if (number == 0 && number1 == 0) {
            clearInterval(timer1);
            time += 100;
            autoplay3();
            if (time == 450) {
                clearInterval(timer1);
                lottery.onclick = function () {
                    alert("今天的抽奖次数用完喽");
                    return false;
                }
                alert("恭喜你获得一级寒石*3，请注意查收！");

            }
        }
    }, time);
}

//花瓣飘落

var n = 8;
function init() {
    var leafcontainer = document.getElementById("leafcontainer");
    for (var i = 0; i < n; i++) {
        leafcontainer.appendChild(creatleaf());

    }
}
function getInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}
function getFloat(low, high) {
    return low + Math.random() * (high - low);
}
function vauleNumber(a) {
    return a + "px";
}
function vauleSecond(a) {
    return a + "s";
}
function creatleaf() {
    var leafDiv = document.createElement("div");
    var image = document.createElement("img");
    var fadeandDropDurtion = vauleSecond(getFloat(5, 11));
    var spinDurtion = vauleSecond(getFloat(3, 8));
    leafDiv.style.top = "-100px";
    leafDiv.style.left = vauleNumber(getInteger(-200, 400)); //随机位置
    leafDiv.style.webkitAnimationName = 'fade,drop';
    leafDiv.style.webkitAnimationDuration = fadeandDropDurtion + ',' + fadeandDropDurtion;
    var leafDelay = vauleSecond(getFloat(0, 4));
    leafDiv.style.webkitAnimationDelay = leafDelay + ',' + leafDelay;
    image.style.webkitAnimationDuration = spinDurtion;
    image.src = 'images/' + getInteger(1, 9) + '.png'
    image.style.webkitAnimationName = 'clockwiseSpin';
    leafDiv.appendChild(image);
    return leafDiv;
}
window.addEventListener('load', init, false);
//设置一个定时器
var timer = null;
function autoplay1() {
    timer = setInterval(function () {
        if (timer % 5500 == 0) {
            clearInterval(timer);
        }
        init();
    }, 5500);
}
autoplay1();
//轮播图标题动画

var active = document.querySelector(".swiper-slide-duplicate-active");
var pages=document.getElementsByClassName("swiper-slide");
    var text=active.children[1];
    for(var i=0;i<pages.length;i++){

        if (pages[i].className.indexOf('swiper-slide-active') > -1) {
            play();
        }
    }
   function play(){
        text.style.webkitAnimationName="ttile";
        text.style.webkitAnimationDuration="1s";
        text.style.webkitAnimationDelay="linear";
}




//表头
//当鼠标在车车上方时显示的
var hidden1 = document.getElementById("ost_d");
var mouse1 = document.getElementById("ost_g");

mouse1.onmouseover = function () {
    hidden1.style.display = "block";
    mouse1.style.visibility = "hidden"
}
mouse1.onmouseout = function () {
    hidden1.style.display = "none"
    mouse1.style.visibility = "visible"

}
//当鼠标放在腾讯游戏榜上
var h3 = document.querySelector(".ost_title");
var hidden2 = document.getElementById("ost_p");
hidden2.onmouseover = function () {
    hidden2.style.display = "block";
}
h3.onmouseover = function () {
    hidden2.style.display = "block";
}
hidden2.onmouseleave = function () {
    hidden2.style.display = "none";
}
