/**
 * Created by Administrator on 2016/12/2 0002.
 */
document.addEventListener('DOMContentLoaded',function(){
    var oV = document.getElementById('vid');
    var oPlay = document.getElementById('p1');
    var oStop = document.getElementById('p2');
    oPlay.onclick = function () {
        oV.play();
        oPlay.style.display = 'none';
    };
},false);