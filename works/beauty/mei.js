/**
 * Created by Administrator on 2016/11/28.
 */
    var oUl=document.getElementById('ul1');
    var aLi=oUl.getElementsByTagName('li');
    var oSpan1=document.getElementById('ss1');
    var timer=null;
    oSpan1.onmouseover=function(){
        for(var i=0;i<aLi.length;i++){
           aLi[i].style.display='block';
        }
        clearTimeout(timer);
    };
    oSpan1.onmouseout=function(){
        timer=setTimeout(function(){
           for(var i=0;i<aLi.length;i++){
               aLi[i].style.display='none';
           }
        },300);
    };
    for(var i=0;i<aLi.length;i++){
        aLi[i].onmouseover=function(){
            this.style.background='#f5f5f5';
            this.style.display='block';
            clearTimeout(timer);
        };
        aLi[i].onmouseout=function(){
            this.style.background='#fff';
            timer=setTimeout(function(){
                for(var i=0;i<aLi.length;i++){
                    aLi[i].style.display='none';
                }
            },300);
        };
    }
    var oUl2=document.getElementById('ul2');
    var aLi2=oUl2.getElementsByTagName('li');
    var oA=document.getElementById('aa1');
    var aA2=oUl2.getElementsByTagName('a');
    var timer2=null;
    oA.onmouseover=function(){
       this.style.background='#ed3577';
       for(var i=0;i<aLi2.length;i++){
           oUl2.style.display='block';
           aLi2[i].style.display='block';
       }
       clearTimeout(timer);
    };
    oA.onmouseout=function(){
       timer2=setTimeout(function(){
          for(var i=0;i<aLi.length;i++){
             aLi2[i].style.display='none';
          }
          oA.style.background='#f69';
       },300);

    };
    for(var i=0;i<aLi2.length;i++){
       aLi2[i].onmouseover=function(){
           this.style.background='#ed3577';
           for(var i=0;i<aA2.length;i++){
               aA2[i].style.color='#fff';
           }
           clearTimeout(timer2);
       };
       aLi2[i].onmouseout=function(){
           timer2=setTimeout(function(){
               for(var i=0;i<aLi2.length;i++){
                   aLi2[i].style.display='none';
               }
           },300);
           this.style.background='#fff';
           for(var i=0;i<aA2.length;i++){
               aA2[i].style.color='#f69';
           }
       };
    }
//大轮播图
  var oDiv=document.getElementById('div1');
