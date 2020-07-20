// 精彩活动的轮播图
//获取到 picture及按钮元素
var pic = document.getElementById("picture");
 var prev =document.querySelector(".prev");
 var next =document.querySelector(".next");
 //获取图片的宽度
 var imgwidth =pic.children[0].offsetWidth;
 var move =0;
 next.onclick=function(){
    if(move==0){
        move=pic.children.length-1;
        pic.style.left=-move*imgwidth+"px";
    }
    move--;
    animate(pic,-move*imgwidth);
 }
function automove(){
    if(move==pic.children.length-1){
        move=0;
        pic.style.left=0+"px";
    }
    move++;
    animate(pic,-move*imgwidth);
}
 
 prev.onclick=function(){
    automove();
 }
// 自动轮播的效果实现
var timer =null;
function autoplay(){         //定义一个定时器，每2s执行一次next.onclick()事件
    timer = setInterval(function(){
        automove();
    },2000);
    
}
autoplay();

//鼠标的移入移除来暂停和继续
var Carousel =document.querySelector(".indexslide");
Carousel.onmouseenter = function(){
    clearInterval(timer);  //移入事件，清除定时器
}
Carousel.onmouseleave = function(){
    autoplay();    //移出事件，继续自动播放
}
// 平移的函数animate
function animate(element,distance){
    clearInterval(element.timer)
    element.timer=setInterval(function(){
        var present=element.offsetLeft;  //获取元素的当前位置
        var movement =10;     //每次移动的距离
        movement=present<distance?movement:-movement;
        present+=movement; //当前移动到位置
        if(Math.abs(present-distance)>Math.abs(movement)){
            element.style.left=present+"px"
        }else{
            element.style.left=distance+"px"
        }
    },10);
    }
  
//大标题的动画
//定义一个计时器，让图片在0.5s后出来
var pic1 = document.getElementsByClassName("main-imgtext");
var ttimer =setTimeout(function(){
pic1[0].style.visibility = "visible";
},500);
//表单验证
var phone=document.getElementById("phone");
var password=document.getElementById("password");
var username=document.getElementById("username");
var identitycard=document.getElementById("identity-card");
var verificationcode=document.getElementById("verification-code");
var register=document.getElementById("register");
// 设置一个变量用于判断每个input
var issubmit=0;
//用函数获取每个输入框的值
var phone=document.getElementById("phone");
var password=document.getElementById("password");
var username=document.getElementById("username");
var identitycard=document.getElementById("identity-card");
var verificationcode =document.getElementById("verification-code");
//进行正则验证
function verify(){
    var regexp1 =/^1[3-9]\d{9}$/; //手机号的正则
    var regexp2 =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;  //密码的正则：数字+字母，6-12位
    var regexp3 =/^[a-zA-Z0-9_-]{4,16}$/;     //姓名的正则：4-16,字母，数字，下划线，减号
    // 身份证的正则
    var regexp4 =/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    if(regexp1.test(phone.value)){
        if(regexp2.test(password.value)){
            if(regexp3.test(username.value)){
                if(regexp4.test(identitycard.value)){
                    if(verificationcode.value==2624){
                        issubmit=1;
                    }else{
                        issubmit=6;
                    }
                }else{
                    issubmit=5;
                }
            }else{
                issubmit=4;
            }
        }else{
            issubmit=3;
        }
    }else{
        issubmit=2;
    }

}

// 提交注册按钮验证
function submit1(){
    var tip =document.getElementById("tip");
    tip2.style.display="none";
    tip1.style.display="block";
    verify()
    if(issubmit==1){
        tip.innerHTML="注册成功";
        popbox();
        
    }else if(issubmit==2){
        tip.innerHTML="请输入正确的手机号";
        popbox();
    }else if(issubmit==3){
        tip.innerHTML="请输入正确密码由6-12位的字母和数字组成";
        popbox();
    }else if(issubmit==4){
        tip.innerHTML="请输入正确用户名由4-16位的字母或数字或下划线或减号组成";
        popbox();
    }else if(issubmit==5){
        tip.innerHTML="请输入正确的身份证号";
        popbox();
    }else if(issubmit==6){
        tip.innerHTML="验证码错误";
        popbox();
    }
    
}
function getcode(){
    var tip2 =document.getElementById("tip2");
    var tip1 =document.getElementById("tip1");
    popbox();
    tip1.style.display="none";
    tip2.style.display="block";
}
// 对话框的设置
function popbox(){
    var popbox =document.getElementById("popbox");
    var poplayer =document.getElementById("poplayer");
    popbox.style.display="block";
    poplayer.style.display="block"; 
};
function closeBox(){
    var popbox =document.getElementById("popbox");
    var poplayer =document.getElementById("poplayer");
    popbox.style.display="none";
    poplayer.style.display="none";
    if(issubmit==1){
        cleanall();
    }
}
function cleanall(){
    var content =document.getElementsByClassName("input-set");
    for(var i=0;i<content.length;i++){
        content[i].value="";
    }
}