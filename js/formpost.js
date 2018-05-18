$(document).ready(function() {
$("#reset").click(function(){
         $('#UsersForm')[0].reset();
    })
    var prince = '';
    var citycode = '';
    var len = cityArray.length;
    var idx = -1;
    /*if(typeof(returnCitySN) != "undefined"){
        while (++idx < len) {
            var v = cityArray[idx];
            if (returnCitySN.cname.indexOf(v[0]) == 0) {
                var cs = v[1].split('|');
                var cstr = returnCitySN.cname.split(v[0])[1];
                $.each(cs, function(i, va) {
                    if (cstr.indexOf(va) === 0) citycode = va;
                });
                prince = v[0];
                break;
            }
        }
    }*/


    var carbrand = "瑞风", //车系列 关系到经销商数据调取
        carmodel = "瑞风S7", //车型  关系到经销商数据调取
        topicn_ame = "瑞风S7超级版上市"; //活动专题，区分PC/WAP
    /*来源*/
    var ly = GetQueryString("ly");
    var lytxt="官网";
    if(ly == "sohu"){
        lytxt = "搜狐wap";
    }else if(ly == "sina"){
        lytxt = "新浪wap";
    }else if(ly == "biauto"){
        lytxt = "易车wap";
    }else if(ly == "qczj"){
        lytxt = "汽车之家wap";
    }else if(ly == "baidu"){
        lytxt = "百度wap";
    } else if (ly == "jrtt") {
        lytxt = "今日头条WAP";
    }


    /*  表单开始   */

    /*初始化设置 和 表单联动*/

    getPrince(prince); //初始省份
   // getPrince2(prince); //初始省份
    getCity(citycode); //执行省份 城市 之间的联动 provinceandcity.js
   // getCity2(citycode); //执行省份 城市 之间的联动 provinceandcity.js
    getDealer(carbrand, carmodel);
   // getDealer2(carbrand, carmodel);
    $("#province").change(function(e){
        getCity($(this).find("option:selected").text());
        getDealer(carbrand, carmodel);
    });
    $("#city").change(function(e){
        getDealer(carbrand, carmodel);
    });
    $("#province2").change(function(e){
        getCity2($(this).find("option:selected").text());
        getDealer2(carbrand, carmodel);
    });
    $("#city2").change(function(e){
        getDealer2(carbrand, carmodel);
    });
    $(".ban_succlosed").click(function(){
        $(".suc_mob").fadeOut(300);
    });





    /*初始化设置 和 表单联动*/



    /*提交*/
    $("#submit").click(function() { //表单提交事件
        ga('send', 'event', 'C01_江淮瑞风S7超级版双端专题WAP', 'C01A02_预约试驾', 'C01A02L01_预约试驾提交');
        var sd = new Date(); //获取日期
        var mt = sd.getMonth() + 1; //月份
        var pt = sd.getFullYear() + "-" + mt + "-" + sd.getDate(); //日期 年月日
        var username = $("#UsersForm [name=username]:input").val(); //参与者姓名
        var mobile = $("#UsersForm [name=mobile]:input").val(); //参与者手机号码  //.val().substr(-6);提取手机后六位
        var mobile_sl8 = $("#UsersForm [name=mobile]:input").val().substr(-8); //参与者手机号码  //.val().substr(-6);提取手机后六位
        var email = ""; // $("#UsersForm [name=email]:input").val();//参与者电子邮箱
        var address = ""; //$("#UsersForm [name=address]:input").val();//参与者家庭住址
        var sex = "";//称谓
        //var sex = $("input[name='sex']:checked").val();//称谓
        var dealer = $("select[name=dealer] option:selected").text(); //经销商名称
        var dealerId = parseInt($("select[name=dealer]").val()); //经销商ID
        var buycar = ""; // $("select[name=buycar] option:selected").text();
        var city = $("select[name=city] option:selected").text(); //经销商城市
        var province = $("select[name=province] option:selected").text(); //参与者 经销商 省份
        var topicname = topicn_ame; //活动名称
        var source = getQueryString('utm_source'); //媒体来源
        var utm_medium = getQueryString('utm_medium');
        var utm_content = getQueryString('utm_content');
        var utm_campaign = getQueryString('utm_campaign');
         var source2 = lytxt;//媒体来源


        //--下面是姓名验证--
        if ($("#username").val() == "*请输入真实姓名" || $("#username").val() == "") {
            //ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + province + '_' + city + '_' + dealer+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});
            ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': "/"+ '_'  + "/"+ '_'  +  "/"+ '_'  +"/"+ '_'  + "/" + '_' + "/" + '_' + "/"+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});
            alert("请输入真实姓名");
            //submitFailure(username,sex,mobile,province,city,dealer);
            return false;
        }

        //--下面是手机验证--
        if ($("#mobile").val() == ""||$("#mobile").val().length != 11) {
            ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  "/"+ '_'  +"/"+ '_'  + "/" + '_' + "/" + '_' + "/"+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});

            alert("请输入手机号码");
            //submitFailure(username,sex,mobile,province,city,dealer);
            return false;
        }

        //--下面是手机验证--
        var myreg = /^1\d{10}$/;
        //var mobile = $("#mobile").val();
        if (!myreg.test(mobile)) {
            ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  "/"+ '_'  +"/"+ '_'  + "/" + '_' + "/" + '_' + "/"+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});
            alert('请输入有效的手机号码！');
            //submitFailure(username,sex,mobile,province,city,dealer);
            return false;
        }

        //--下面是省份验证--
        if ($("#province").find("option:selected").text() == "" || $("#province").find("option:selected").text() == "省份") {
            ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + "/" + '_' + "/" + '_' + "/"+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});

            alert("请选择省份");
            //submitFailure(username,sex,mobile,province,city,dealer);
            return false;
        }
        //--下面是城市验证--
        if ($("#city").find("option:selected").text() == "" || $("#city").find("option:selected").text() == "城市") {
            ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + province + '_' + "/" + '_' + "/"+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});

            alert("请选择城市");
            //submitFailure(username,sex,mobile,province,city,dealer);
            return false;
        }
        //--下面是经销商验证--
        if ($("#dealer").find("option:selected").text() == "" || $("#dealer").find("option:selected").text() == "经销商") {
            ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + province + '_' + city + '_' + "/"+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});

            alert("请选择经销商");
            //submitFailure(username,sex,mobile,province,city,dealer);
            //activityi_car(4,carmodel,username,mobile_sl8,province,city,dealer);
            return false;
        }


        //写入江淮官网接口
        $.ajax({
            type: "POST",
            //url: "http://www.jac.com.cn/jacservice/api/testdriver", //数据提交处理地址
            url: "add.php",
            data: {
                brandname: carbrand, //品牌名称
                modelname: carmodel, //车型名称
                budget: '',//购车预算
                //pretime:pt,//预计预约时间
                // pretime: '',//预计预约时间
                dealername: dealerId, //经销商ID
                createuser: username, //参与者姓名
                email: email, //参与者电子邮件
                phone: mobile, //参与者手机
                addr:address,//联系地址
                sex: sex, //称谓 1 2
                userprince: province, //参与者省份
                usercity: city, //参与者城市
                // prince: province, //经销商省份
                hasbrand:"",//已有车车型
                hasmodel:"",//已有车车型
                descreption:"",//描述
                company: "cig_n69rwqtzpu", //公司名称
                activityname: topicname+"-"+source2, //活动名称
                // activityname: topicname //活动名称
            },
            success: function(data) { //提交成功执行
                $("#UsersForm [name=username]:input").val("");
                $("#UsersForm [name=mobile]:input").val("");
                ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交成功', {'dimension1': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + province + '_' + city + '_' + dealer+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});
               // ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题PC/预约试驾提交成功', {'dimension1': name+ '_'  + sex+ '_'  +  mobile（后8位）+ '_'  +email+ '_'  + Province + '_' + City + '_' + dealer+ '_'  +carmodel+ '_'  +cartype+ '_'  +buytime});
                alert('提交成功');
               $('#UsersForm')[0].reset();
                if(data.Success == '1'){
                    if(typeof(ga) != "undefined"){
                    }
                }
            },
            error: function(data) { //提交失败执行
                ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + province + '_' + city + '_' + dealer+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});
                alert("提交失败");
                //submitFailure(username,sex,mobile,province,city,dealer);
            }


        });



        //alert('提交成功');
        //写入数据中心接口

        var c_data = {
            model: carmodel,
            province: province,
            city: city, //经销商城市
            dealer: dealer, //经销商名称
            realname: username, //参与者姓名
            mobile: mobile, //参与者手机
            pretime: '', //预计预约时间
            utm_source: source, //媒体来源
            activity: topicname, //活动名称
            utm_medium: utm_medium,
            utm_content: utm_content,
            utm_campaign: utm_campaign
        }
        var global_base_url = "http://www.jac.com.cn/jacpv/orderdata2014/index.php/";
        $.post(global_base_url + 'api/add_order?jp=1', c_data, function(json) {
            if (json.code != '200') {
                //alert(json.msg);
            } else {
                //ga('send', 'pageview', '/VP/江淮SUV盛夏购车季专题pc/预约试驾成功', {'dimension1': username+ '_'  + '/' + '_'  + (mobile.substr(-8)) + '_'  + '/' + '_'  + province + '_' + city + '_' + dealer + '_'  + carmodel + '_'  + carbrand + '_'  + '/'});
                //createPVUV1(username, mobile, province, city, dealer);
                //$('#UsersForm')[0].reset();
                //getPrince(prince);
                //getCity(citycode);
                //alert('提交成功');
            }
        }, 'jsonp');

        return false;
    });
    /*提交*/
    $("#submit2").click(function() { //表单提交事件
        //ga('send', 'event', 'C01_江淮瑞风R3双端专题wap', 'C01A02_预约试驾', 'C01A02L01_预约试驾提交');
        var sd = new Date(); //获取日期
        var mt = sd.getMonth() + 1; //月份
        var pt = sd.getFullYear() + "-" + mt + "-" + sd.getDate(); //日期 年月日
        var username = $("#UsersForm2 [name=username2]:input").val(); //参与者姓名
        var mobile = $("#UsersForm2 [name=mobile2]:input").val(); //参与者手机号码  //.val().substr(-6);提取手机后六位
        var mobile_sl8 = $("#UsersForm2 [name=mobile2]:input").val().substr(-8); //参与者手机号码  //.val().substr(-6);提取手机后六位
        var email = ""; // $("#UsersForm [name=email]:input").val();//参与者电子邮箱
        var address = ""; //$("#UsersForm [name=address]:input").val();//参与者家庭住址
        var sex = "";//称谓
        //var sex = $("input[name='sex']:checked").val();//称谓
        var dealer = $("select[name=dealer2] option:selected").text(); //经销商名称
        var dealerId = parseInt($("select[name=dealer2]").val()); //经销商ID
        var buycar = ""; // $("select[name=buycar] option:selected").text();
        var city = $("select[name=city2] option:selected").text(); //经销商城市
        var province = $("select[name=province2] option:selected").text(); //参与者 经销商 省份
        var topicname = topicn_ame; //活动名称
        var source = getQueryString('utm_source'); //媒体来源
        var utm_medium = getQueryString('utm_medium');
        var utm_content = getQueryString('utm_content');
        var utm_campaign = getQueryString('utm_campaign');
        var source2 = lytxt;//媒体来源


        //--下面是姓名验证--
        if ($("#username2").val() == "*姓名" || $("#username2").val() == "") {
            //ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + province + '_' + city + '_' + dealer+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});
            ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': "/"+ '_'  + "/"+ '_'  +  "/"+ '_'  +"/"+ '_'  + "/" + '_' + "/" + '_' + "/"+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});
            alert("请输入真实姓名");
            //submitFailure(username,sex,mobile,province,city,dealer);
            return false;
        }

        //--下面是手机验证--
        if ($("#mobile2").val() == ""||$("#mobile2").val().length != 11||$("#mobile2").val() == "电话") {
            ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  "/"+ '_'  +"/"+ '_'  + "/" + '_' + "/" + '_' + "/"+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});

            alert("请输入手机号码");
            //submitFailure(username,sex,mobile,province,city,dealer);
            return false;
        }

        //--下面是手机验证--
        var myreg = /^1\d{10}$/;
        //var mobile = $("#mobile").val();
        if (!myreg.test(mobile)) {
            ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  "/"+ '_'  +"/"+ '_'  + "/" + '_' + "/" + '_' + "/"+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});
            alert('请输入有效的手机号码！');
            //submitFailure(username,sex,mobile,province,city,dealer);
            return false;
        }

        //--下面是省份验证--
        if ($("#province2").find("option:selected").text() == "" || $("#province2").find("option:selected").text() == "省份") {
            ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + "/" + '_' + "/" + '_' + "/"+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});

            alert("请选择省份");
            //submitFailure(username,sex,mobile,province,city,dealer);
            return false;
        }
        //--下面是城市验证--
        if ($("#city2").find("option:selected").text() == "" || $("#city2").find("option:selected").text() == "城市") {
            ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + province + '_' + "/" + '_' + "/"+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});

            alert("请选择城市");
            //submitFailure(username,sex,mobile,province,city,dealer);
            return false;
        }
        //--下面是经销商验证--
        if ($("#dealer2").find("option:selected").text() == "" || $("#dealer2").find("option:selected").text() == "经销商") {
            ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + province + '_' + city + '_' + "/"+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});

            alert("请选择经销商");
            //submitFailure(username,sex,mobile,province,city,dealer);
            //activityi_car(4,carmodel,username,mobile_sl8,province,city,dealer);
            return false;
        }


        //写入江淮官网接口
        $.ajax({
            type: "POST",
            //url: "http://www.jac.com.cn/jacservice/api/testdriver", //数据提交处理地址
            url: "add.php",
            data: {
                brandname: carbrand, //品牌名称
                modelname: carmodel, //车型名称
                budget: '',//购车预算
                //pretime:pt,//预计预约时间
                // pretime: '',//预计预约时间
                dealername: dealerId, //经销商ID
                createuser: username, //参与者姓名
                email: email, //参与者电子邮件
                phone: mobile, //参与者手机
                addr:address,//联系地址
                sex: sex, //称谓 1 2
                userprince: province, //参与者省份
                usercity: city, //参与者城市
                // prince: province, //经销商省份
                hasbrand:"",//已有车车型
                hasmodel:"",//已有车车型
                descreption:"",//描述
                company: "cig_n69rwqtzpu", //公司名称
                activityname: topicname+"-"+source2, //活动名称
                // activityname: topicname //活动名称
            },
            success: function(data) { //提交成功执行
                $("#UsersForm2 [name=username]:input").val("");
                $("#UsersForm2 [name=mobile]:input").val("");
                //ga('send', 'pageview', '/VP/江淮瑞风R3双端专题wap/预约试驾提交成功', {'dimension1': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + province + '_' + city + '_' + dealer+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});
                ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题PC/预约试驾提交成功', {'dimension1': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + province + '_' + city + '_' + dealer+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});

                alert('提交成功');
                $('#UsersForm2')[0].reset();
                if(data.Success == '1'){
                    if(typeof(ga) != "undefined"){
                    }
                }
            },
            error: function(data) { //提交失败执行
                ga('send', 'pageview', '/VP/江淮瑞风S7超级版双端专题WAP/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + province + '_' + city + '_' + dealer+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});

                //ga('send', 'pageview', '/VP/江淮瑞风R3双端专题wap/预约试驾提交失败', {'dimension2': username+ '_'  + "/"+ '_'  +  mobile_sl8+ '_'  +"/"+ '_'  + province + '_' + city + '_' + dealer+ '_'  +carbrand+ '_'  +carmodel+ '_'  +"/"});
                alert("提交失败");
                //submitFailure(username,sex,mobile,province,city,dealer);
            }


        });



        //alert('提交成功');
        //写入数据中心接口

        var c_data = {
            model: carmodel,
            province: province,
            city: city, //经销商城市
            dealer: dealer, //经销商名称
            realname: username, //参与者姓名
            mobile: mobile, //参与者手机
            pretime: '', //预计预约时间
            utm_source: source, //媒体来源
            activity: topicname, //活动名称
            utm_medium: utm_medium,
            utm_content: utm_content,
            utm_campaign: utm_campaign
        }
        var global_base_url = "http://www.jac.com.cn/jacpv/orderdata2014/index.php/";
        $.post(global_base_url + 'api/add_order?jp=1', c_data, function(json) {
            if (json.code != '200') {
                //alert(json.msg);
            } else {
                //ga('send', 'pageview', '/VP/江淮SUV盛夏购车季专题pc/预约试驾成功', {'dimension1': username+ '_'  + '/' + '_'  + (mobile.substr(-8)) + '_'  + '/' + '_'  + province + '_' + city + '_' + dealer + '_'  + carmodel + '_'  + carbrand + '_'  + '/'});
                //createPVUV1(username, mobile, province, city, dealer);
                //$('#UsersForm')[0].reset();
                //getPrince(prince);
                //getCity(citycode);
                //alert('提交成功');
            }
        }, 'jsonp');

        return false;
    });

    //提交失败
    function submitFailure(username,sex,mobile,province,city,dealer){
        sex="/"
        // ga('send', 'pageview', '/VP/江淮SUV盛夏购车季专题pc/预约试驾失败', {'dimension2': username+ '_'  + sex + '_'  + (mobile.substr(-8)) + '_'  + '/' + '_'  + province + '_' + city + '_' + dealer + '_'  + carmodel + '_'  + carbrand + '_'  + '/'});
    }


    //获取URL参数
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return "";
    } /*获取cookie中的广告为参数 *cookie格式 CIGDCAD=utm_campaign%3A8658718%7Cutm_source%3Abitauto%7Cutm_content%3AShouYeQuanGuoTongFa%7Cutm_medium%3AReMenPinPaiTuiJian; expires=Tue, 28 Aug 2035 07:37:56 GMT; path=/; domain=.jac.com.cn **/

    function getCIGDCAD(name, icount) {
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        var myarrroot;
        var myarr; //alert(decodeURI(arr));
        arr = decodeURIComponent(arr); //console.debug("这是debug"+arr);
        if (arr != null) {
            myarrroot = arr.split("|"); //console.debug("这是debug myarrroot[0]"+myarrroot[0]);
        }
        if (myarrroot != null) {
            if (myarrroot.length > icount) {
                myarr = myarrroot[icount].split(":");
            }
        } //return null;
        if (myarr != null) {
            if (myarr[1] != "(direct)") {
                return myarr[1];
            } else {
                return "";
            }
        } else {
            return "";
        }
    };
    /*  表单结束   */
});
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
}