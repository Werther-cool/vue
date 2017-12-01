/**
 * Created by Administrator on 2017/3/30.
 */
function slide(slideCell,titCell,mainCell){
    TouchSlide({
        slideCell: slideCell,
        titCell: titCell,
        mainCell: mainCell,
        effect: "leftLoop"
    });
}
function menu(index){
    $(index).on('click',function(){
        $(this).addClass('on').siblings().removeClass('on')
    })
}
function Location(index){
    var province='';
    var city='';
    jQuery.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",function(){
        province=remote_ip_info["province"];
        city=remote_ip_info["city"];
        $(index).html(city)
    })
}
function agree(index,agree_on){
    $(index).click(function(){
        var agreeOn=($(this).hasClass(agree_on)?true:false);
        if(!agreeOn){
            $(this).addClass(agree_on)
        }
        else{
            $(this).removeClass(agree_on)
        }
    })
}
function notice(index,agree_on){
    $(index).click(function(){
        var agreeOn=($(this).hasClass(agree_on)?true:false);
        if(!agreeOn){
            $(this).addClass(agree_on).val('取消提醒')
        }
        else{
            $(this).removeClass(agree_on).val('+提醒我')
        }
    })
}
function loading(index){
    $(index).attr('disabled', 'true');
    $(index).val('');
    $(index).css('background','#ff5d8b url(images/ok_loading.gif) no-repeat center');
}
function loading_del(index,text){
    $(index).removeAttr('disabled');
    $(index).val(text);
    $(index).css('background','#ff5d8b');
}
function tabs(tabTit,on,tabCon){
    $(tabCon).each(function(){
        $(this).children().eq(0).css("display","block");
        $(this).children().eq(0).siblings("div").css("display","none");
    });
    $(tabTit).each(function(){
        $(this).children().eq(0).addClass(on);
    });
    $(tabTit).children().click(function(){
        $(this).addClass(on).siblings().removeClass(on);
        var index=$(tabTit).children().index($(this));
        $(tabCon).children().eq(index).css("display",'block').siblings().css("display","none");
    })
}
function discount(tabTit,on,tabCon){
    $(tabCon).each(function(){
        $(this).children().eq(0).slideDown('slow');
        $(this).children().eq(0).siblings("div").slideUp('slow');
    });
    $(tabTit).each(function(){
        $(this).children().eq(0).addClass(on);
    });
    $(tabTit).children().click(function(){
        $(this).addClass(on).siblings().removeClass(on);
        var index=$(tabTit).children().index($(this));
        $(tabCon).children().eq(index).slideDown('slow').siblings().slideUp('slow');
    })
}
function select(index,tips,on,rotate,img){
    $(index).on('click',function(){
        var s=($(tips).hasClass(on)?true:false);
        if(!s){
            $(tips).addClass(on).slideDown();
            $(this).find(img).addClass(rotate);

        }
        else{
            $(tips).removeClass(on).slideUp();
            $(this).find(img).removeClass(rotate)
        }
    })
};

function single(index,on,recode,recode_list,dui){
    $(index).on('click',function(){
        var s=($(index).hasClass(on)?true:false);
        if(!s){
            $(index).addClass(on);
            //$(recode).slideToggle('slow');
            single_next(recode_list,dui,index,recode,on);
        }
        else{
            $(index).removeClass(on);
            $(recode).hide();
        }
    })
}
function single_next(index,dui,oldVal,select,on){
    $(index).on('click',function(){
        $(this).addClass(dui).siblings().removeClass(dui);
        var choose=$(this).text();
        $(oldVal).text(choose).removeClass(on);
        $(select).hide();
    })
}
function radio(index,calendar_day,calendar_day_on,on){
    $(index).on('click',function(){
        var s=($(index).hasClass(on)?true:false);
        if(!s){
            $(index).addClass(on);
            $(index).find(calendar_day).addClass(calendar_day_on)
        }
        else{
            $(index).removeClass(on);
            $(index).find(calendar_day).removeClass(calendar_day_on)
        }
    })
}

//$(index).on('click',function(){
//    var s=($(index).hasClass(on)?true:false);
//    if(!s){
//        $(this).addClass(on);
//        $(recode).slideToggle('slow');
//        single_next(index,dui,index,recode,on);
//    }
//    else{
//        $(index).removeClass(on);
//        $(recode).hide();
//    }
//})


function idCard(index,select){
    $(index).on('click',function(){
        $(select).slideToggle('slow')
    })
};
function quit(index,select){
    $(index).on('click',function(){
        $(select).hide();
    })
}
function choose(index,idCard,select){
    $(index).on('click',function(){
        var choose=$(this).text();
        $(idCard).find("span").text(choose);
        $(select).hide();
    })
}
function load_more(index){
    var totalheight = 0;
    var htm_index = 5;
    $(window).scroll(function () {
        totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
        if (totalheight >= $(document).height() - htm_index) {
            $(index).css('display','block');
        }
    })
}
function progressBar(barLine,barFont){
    var barNum=$(barLine).attr("barNum");
    $(barLine).css("width",barNum+"%");
    $(barFont).text(barNum+"%")
}
function touch_phone(index,data,place){
    var area = new LArea();
    area.init({
        'trigger': index, //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
        'valueTo': place, //选择完毕后id属性输出到该位置
        'keys': {
            id: 'id',
            name: 'name'
        }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
        'type': 1, //数据源类型
        'data': data //数据源
    });
}

var SexData=[{"id":"男","name":"男"},{"id":"女","name":"女"}];
var SingleData=[{"id":"是","name":"是"},{"id":"否","name":"否"}];
var SchoolData=[{"id":"高中以下","name":"高中以下"},{"id":"大专","name":"大专"},{"id":"本科","name":"本科"},{"id":"研究生","name":"研究生"},{"id":"硕士","name":"硕士"},{"id":"博士","name":"博士"}];
var MoneyData=[{"id":"3000以下","name":"3000以下"},{"id":"3000-5000","name":"3000-5000"},{"id":"5000-8000","name":"5000-8000"},{"id":"8000-15000","name":"8000-15000"},{"id":"15000-20000","name":"15000-20000"},{"id":"20000以上","name":"20000以上"}];
function getTimer(){
    var get_con=$(".countdown").attr('count_time');    //获取上面的值（数据库传进的）
    var countime = Date.parse(get_con.replace(/-/g,"/"))*1;  //不要把字符串中斜杠还是横杠传进去数据里
    //不要把字符串中的Date(这样的字符也传进去，要先处理一下，这样很方便 就能处理的
    //可以使用replace方法，例如：replace("/Date(","").replace(")/","");
    var endtime=new Date(countime);   /*定义结束时间*/     //转化为时间戳
    var nowtime=new Date();   /*获取现在时间*/                             //转化为时间戳
    var chatime=endtime.getTime()-nowtime.getTime();   /*获取时间差*/
    if(chatime < 0 && chatime > -30)
    {
        window.location.href = '/line/detail/'+lineId;
        return;
    }
    var hour=Math.floor(chatime/1000/60/60);
    var minute=Math.floor(chatime/1000/60%60);
    var second=Math.floor(chatime/1000%60);
    if(minute<=9) minute='0'+minute;
    if(second<=9) second='0'+second;
    if(hour<=9) hour='0'+hour;
    $(".cd_hour").html(hour);
    $(".cd_min").html(minute);
    $(".cd_se").html(second);
    if(nowtime >= endtime){
        $(".cd_hour").html('0'+'0');
        $(".cd_min").html('0'+'0');
        $(".cd_se").html('0'+'0');
    }
};