;(function () {
    document.addEventListener('DOMContentLoaded',function(){

        var oNav = document.querySelector('.oNav');
        var oA = document.getElementById('oAc');
        var oT = document.getElementById('oTc');
        var oClose = document.getElementById('close');
        var oB = document.getElementById('oBox');
        var ob = document.getElementById('opbox');
        var tH = document.getElementById('tHeader');

        oNav.addEventListener('touchstart', function (ev) {
            tH.style.display = 'block';
            oClose.style.display = 'block';
            oB.style.display = 'block';
            ob.style.display = 'block';
            oB.style.opacity = '1';
        });
        oA.addEventListener('touchstart', function (ev) {
            tH.style.display = 'none';
            oClose.style.display = 'none';
            ob.style.display = 'none';
            oB.style.opacity = '0';
        });
        oT.addEventListener('touchstart', function (ev) {
            tH.style.display = 'none';
            oClose.style.display = 'none';
            ob.style.display = 'none';
            oB.style.opacity = '0';
        });
        oClose.addEventListener('touchstart', function (ev) {
            tH.style.display = 'none';
            oClose.style.display = 'none';
            oB.style.display = 'none';
            ob.style.display = 'none';
        });
        ev.preventDefault();
        return false;
    },false);
})();