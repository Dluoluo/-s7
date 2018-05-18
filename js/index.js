
// 倒计时
function daojishi() {
    var enddate = '2018-5-20 17:00:00';//当前时间
    function leftTimer(enddate) {
        var leftTime = (new Date(enddate)) - new Date(); //计算剩余的毫秒数
        //var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
        var hours = parseInt(leftTime / 1000 / 60 / 60, 10); //计算剩余的小时
        var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
        var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
        //days = checkTime(days);
        hours = checkTime(hours);
        minutes = checkTime(minutes);
        seconds = checkTime(seconds);
        if (hours >= 0 || minutes >= 0 || seconds >= 0) {
            $(".count-box ").html('<span id="day">' + hours + '</span>:<span id="hour">' + minutes + '</span>:<span id="minute">' + seconds + '</span>');
        }
        if (hours <= 0 && minutes <= 0 && seconds <= 0) {
            window.clearInterval(_ordertimer);
            _ordertimer = null;
        }
    }
    function checkTime(i) { //将0-9的数字前面加上0，例1变为01
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    function go(v) {
        var date1 = new Date(),
            data2 = new Date(v);
        if (data2 < date1) return;//设置的时间小于现在时间退出
        _ordertimer = setInterval(function () { leftTimer(enddate) }, 1000);
    }
    go(enddate)
}
daojishi()
//配置/参数切换
function canshu() {
    var oSelect = document.querySelector('.parameter-select-but'),
        aOptin = oSelect.querySelectorAll('option'),
        oDiv = document.querySelector('.parameter-canshu'),
        aTr = oDiv.querySelectorAll('tr');

    oSelect.addEventListener('change', function () {
        for (var i = 0; i < aOptin.length; i++) {
            if (oSelect.value === aOptin[i].value) {
                for (var q = 29; q < aTr.length; q++) {
                    var aTd = aTr[q].querySelectorAll('td');
                    if (aTd.length > 1) {
                        for (var j = 1; j < aTd.length; j++) {
                            aTd[j].style.display = 'none';
                           
                        }
                        aTd[i + 1].style.display = 'block';
                    }
                }
            }
        }
    }, false)
}
canshu()
// //安全  
// var mySafetySwiper = new Swiper('.swiper-safety', {
//     direction: 'horizontal',
//     loop: true,
//     // 如果需要分页器
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // 如果需要前进后退按钮
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// })
// //互联
// var myInterconnectedSwiper = new Swiper('.swiper-interconnected', {
//     direction: 'horizontal',
//     loop: true,
//     // 如果需要分页器
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // 如果需要前进后退按钮
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// })
// // 空间
// var mySpaceSwiper = new Swiper('.swiper-space', {
//     direction: 'horizontal',
//     loop: true,
//     // 如果需要分页器
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // 如果需要前进后退按钮
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// })
// // 动力
// var myPowerSwiper = new Swiper('.swiper-power', {
//     direction: 'horizontal',
//     loop: true,
//     // 如果需要分页器
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // 如果需要前进后退按钮
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// })