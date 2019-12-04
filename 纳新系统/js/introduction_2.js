
var x1=document.getElementsByClassName('write1');
var x2=document.getElementsByClassName('write2');
var x3=document.getElementsByClassName('write3');
var y1=document.getElementsByClassName('img1');
var y2=document.getElementsByClassName('img2');
var y3=document.getElementsByClassName('img3');


y1[0].addEventListener('click', function () {
    x1[0].style.opacity="1";
    x2[0].style.opacity="0";
    x3[0].style.opacity="0";
    y1[0].className="active1";
    y2[0].className="img2";
    y3[0].className="img3";
});
y1[1].addEventListener('click', function () {
    x1[1].style.opacity="1";
    x2[1].style.opacity="0";
    x3[1].style.opacity="0";
    y1[1].className="active1";
    y2[1].className="img2";
    y3[1].className="img3";
});
y2[0].addEventListener('click', function () {
    x2[0].style.opacity="1";
    x1[0].style.opacity="0";
    x3[0].style.opacity="0";
    y2[0].className="active2";
    y1[0].className="img1";
    y3[0].className="img3";
});
y2[1].addEventListener('click', function () {
    x2[1].style.opacity="1";
    x1[1].style.opacity="0";
    x3[1].style.opacity="0";
    y2[1].className="active2";
    y1[1].className="img1";
    y3[1].className="img3";
});
y3[0].addEventListener('click', function () {
    x3[0].style.opacity="1";
    x1[0].style.opacity="0";
    x2[0].style.opacity="0";
    y3[0].className="active3";
    y1[0].className="img1";
    y2[0].className="img2";
});
y3[1].addEventListener('click', function () {
    x3[1].style.opacity="1";
    x1[1].style.opacity="0";
    x2[1].style.opacity="0";
    y3[1].className="active3";
    y1[1].className="img1";
    y2[1].className="img2";
});
