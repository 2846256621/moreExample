var obutton=document.getElementById('button1');
       var obutton1=document.getElementById('button2');
       var obutton1=document.getElementById('body3');
// obutton.onclick=function() {
//    obutton.style.display='none';
//    obutton1.style.display='none';
//    body3.style.display='inline';
// }
function checkIP(){
   var text=document.getElementById("url").value;
   if(text==""){
     alert("不能为空哦！");
     return false;
   }
   return true;
}
//电话判断
function checkMobile(tel){
        var reg = /(^1[3|4|5|7|8][0-9]{9}$)/;
        if(reg.test(tel)){
            return true;
        }else{
            return false;
        }
    }
function checkSubmit(){
        var userPhone = $.trim($('#input1').val());
        var oname = $.trim($('#input4').val());
        var oclass = $.trim($('#input5').val());
        var onum = $.trim($('#input6').val());
        if(userPhone == ''){
            alert('请输入手机号');
            return false;
        }
         if(!checkMobile(userPhone)){
            alert('手机号格式错误');
            return false;
        }
        if(oname == ''){
            alert('请输入姓名');
            return false;
        }
        if(oclass == ''){
            alert('请输入班级');
            return false;
        }
        if(onum == ''){
            alert('请输入学习方向');
            return false;
        }
       
    }
    var particles = function() {
    var bubbles = function() {
        var density = 100;
        var uppersize = 6;
        var lowersize = 3;
    };
};

function initparticles() {
    bubbles();
    lines();
    confetti();
    fire();
    sunbeams();
}

function bubbles() {
    $.each($(".particletext.bubbles"), function() {
        var bubblecount = ($(this).find(".text").width() / 50) * 10;
        for (var i = 0; i <= bubblecount; i++) {
            var size = $.rnd(6, 12);
            $(this).append('<span class="particle" style="top:' + $.rnd(20, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
        }
    });
}

function lines() {
    $.each($(".particletext.lines"), function() {
        var linecount = ($(this).find(".text").width() / 50) * 10;
        for (var i = 0; i <= linecount; i++) {
            $(this).append('<span class="particle" style="top:' + $.rnd(-30, 50) + '%; left:' + $.rnd(-10, 110) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(20, 80) + '%;animation-delay: -' + ($.rnd(0, 30) / 10) + 's;"></span>');
        }
    });
}

function confetti() {
    $.each($(".particletext.confetti"), function() {
        var confetticount = ($(this).find(".text").width() / 50) * 10;
        for (var i = 0; i <= confetticount; i++) {
            $(this).append('<span class="particle c' + $.rnd(1, 2) + '" style="top:' + $.rnd(10, 50) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(6, 8) + 'px; height:' + $.rnd(3, 4) + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
        }
    });
}

function fire() {
    $.each($(".particletext.fire"), function() {
        var firecount = ($(this).find(".text").width() / 50) * 20;
        for (var i = 0; i <= firecount; i++) {
            var size = $.rnd(8, 12);
            $(this).append('<span class="particle" style="top:' + $.rnd(40, 70) + '%; left:' + $.rnd(-10, 100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 20) / 10) + 's;"></span>');
        }
    });
}

function sunbeams() {
    $.each($(".particletext.sunbeams"), function() {
        var linecount = ($(this).find(".text").width() / 50) * 10;
        for (var i = 0; i <= linecount; i++) {
            $(this).append('<span class="particle" style="top:' + $.rnd(-50, 00) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(80, 160) + '%;animation-delay: -' + ($.rnd(0, 30) / 10) + 's;"></span>');
        }
    });
}

jQuery.rnd = function(m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
}

initparticles();




$(function() {
    $.fn.extend({
        zzButton: function(action, callback) {
            if (action === 'start') {
                if ($(this).hasClass('zz-button-progress-done')) {
                    $(this).removeClass('zz-button-progress-done')
                    $(this).removeClass('zz-button-progress-done-active');
                }

                if (!$(this).hasClass('active')) {
                    $(this).addClass('active');
                    $(this).on('transitionend', function() {
                        if ($(this).hasClass('active')) {
                            callback();
                        } else if ($(this).hasClass('zz-button-progress-done')) {
                            $(this).addClass('zz-button-progress-done-active');
                        }
                    });
                }
            } else if (action === 'end') {
                $(this).on('animationend', function() {
                    $(this).removeClass('active');
                    $(this).removeClass('zz-button-progress-100');
                    $(this).addClass('zz-button-progress-done');
                });
            }
        }
    });
});

$(function() {
    $.fn.zzButtonProgress = function(elm, progress, callback) {
        if (progress <= 100) {
            setTimeout(function() {
                $(elm).removeClass('zz-button-progress-' + (progress - 1));
                $(elm).addClass('zz-button-progress-' + progress);
                $.fn.zzButtonProgress(elm, progress + 1, callback);
            }, 10);
        } else {
            $('#zzButton').zzButton('end');
        }
    };

    $('#zzButton').on('click', function() {
        var elm = this;

        $('#zzButton').zzButton('start', function() {
            $.fn.zzButtonProgress(elm, 0, function() {
                $(this).removeClass('active');
            });
        });
    });
});
