window.onload = function() {
	var ro = document.getElementById('div1');
    var oUl = ro.getElementsByTagName('ul')[0];
    var aLI = ro.getElementsByTagName('li');

    oUl.innerHTML+=oUl.innerHTML;
    oUl.style.width = aLI[0].offsetWidth * aLI.length+'px';
    oUl.style.height = aLI[0].offsetHeight * aLI.length+'px';

    setInterval(function () {
        oUl.style.left = oUl.offsetLeft-5 + 'px';
        if(oUl.offsetLeft<-oUl.offsetWidth/2)
        {
            oUl.style.left=0 + 'px';
        }
    },30);
}