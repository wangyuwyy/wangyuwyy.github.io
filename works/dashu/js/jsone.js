;(function () {
    document.addEventListener('DOMContentLoaded',function(){
        var oBanner = document.getElementById('banner');
        var oUl = oBanner.children[0];
        var aLi = oUl.children;
        var oOl = oBanner.children[1];
        var aBtn = oOl.children;
        var oNav = document.querySelector('.oNav');
        var oA = document.getElementById('oAc');
        var oT = document.getElementById('oTc');
        var oClose = document.getElementById('close');
        var oB = document.getElementById('oBox');
        var ob = document.getElementById('box1');

        oUl.style.width = aLi[0].offsetWidth*aLi.length/rem+'rem';
        var bOk = false;
        var n = 1;
        var x = -n*aLi[0].offsetWidth/rem;
        oUl.addEventListener('touchstart',function(ev){
            if(bOk)return;
            bOk = true;
            oUl.style.WebkitTransition = 'none';
            var oTouch = ev.targetTouches[0];
            var downX = oTouch.pageX/rem;
            var disX = downX-x;
            function fnMove(ev){
                var oTouch = ev.targetTouches[0];
                x = oTouch.pageX/rem-disX;
                oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
            }
            function fnEnd(ev){
                document.removeEventListener('touchmove',fnMove,false);
                document.removeEventListener('touchend',fnEnd,false);
                var oTouch = ev.changedTouches[0];
                var upX = oTouch.pageX/rem;

                if(Math.abs(upX-downX)>100/rem){
                    if(downX>upX){
                        n++;
                    }else if(downX<upX){
                        n--;
                    }
                }
                x = -n*aLi[0].offsetWidth/rem;

                oUl.style.WebkitTransition = '.5s all ease';

                oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
                function tranEnd(){
                    oUl.removeEventListener('transitionend',tranEnd,false);
                    if(n==0){
                        n = aLi.length-2;
                        oUl.style.WebkitTransition = 'none';
                        x = -n*aLi[0].offsetWidth/rem;
                        oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
                    }else if(n==aLi.length-1){
                        n = 1;
                        oUl.style.WebkitTransition = 'none';
                        x = -n*aLi[0].offsetWidth/rem;
                        oUl.style.WebkitTransform = 'translate3d('+x+'rem,0,0)';
                    }

                    for(var i=0;i<aBtn.length;i++){
                        aBtn[i].classList.remove('active');
                    }
                    aBtn[n-1].classList.add('active');


                    bOk = false;
                }
                oUl.addEventListener('transitionend',tranEnd,false);
            }
            document.addEventListener('touchmove',fnMove,false);
            document.addEventListener('touchend',fnEnd,false);
            ev.preventDefault();
        },false);
        oNav.addEventListener('touchstart', function (ev) {
            oClose.style.display = 'block';
            oB.style.display = 'block';
            ob.style.display = 'block';
            oB.style.opacity = '1';
        });
        oA.addEventListener('touchstart', function (ev) {
            oClose.style.display = 'none';
            ob.style.display = 'none';
            oB.style.opacity = '0';
        });
        oT.addEventListener('touchstart', function (ev) {
            oClose.style.display = 'none';
            ob.style.display = 'none';
            oB.style.opacity = '0';
        });
        oClose.addEventListener('touchstart', function (ev) {
            oClose.style.display = 'none';
            oB.style.display = 'none';
            ob.style.display = 'none';
        });
    },false);
})();