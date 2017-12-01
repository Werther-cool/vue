/**
     ajax({
        url: '/',
        type:'',
        data: {user: oUser.value, pass: oPass.value},
        success: function (str){
            var json=eval('('+str+')');
            if(json.ok){
                alert('登录成功');
            }else{
                alert('失败：'+json.msg);
            }
            },
        error: function (){
         alert('通信失败');
        }
    });
 */
function json2url(json){
    var arr=[];
    for(var name in json){
        arr.push(name+'='+json[name]);
    }
    return arr.join('&');
}
function ajax(json){
    json=json || {};
    if(!json.url)return;
    json.data=json.data || {};
    json.type=json.type || 'get';

    var timer=null;

    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else{
        var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
    }

    switch(json.type){
        case 'get':
            oAjax.open('GET',json.url+'?'+json2url(json.data),true);
            oAjax.send();
            break;
        case 'post':
            oAjax.open('POST',json.url,true);
            oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            oAjax.send(json2url(json.data));
            break;
    }

    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            clearTimeout(timer);
            if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
                json.success && json.success(oAjax.responseText);
            }else{
                json.error && json.error(oAjax.status);
            }
        }
    };
}

// 滚动兼容
function getScrollTop() {  
    var scrollPos;
    if (window.pageYOffset) {
    scrollPos = window.pageYOffset; }
    else if (document.compatMode && document.compatMode != 'BackCompat')
    { scrollPos = document.documentElement.scrollTop; }
    else if (document.body) { scrollPos = document.body.scrollTop; }
    return scrollPos;
}
