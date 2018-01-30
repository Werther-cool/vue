import { parse } from "querystring";

let weekday = date => {
    var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    var d = new Date(date*1000).getDay();
     return weekDay[d];
}
/* 时间戳 => 2017年1月1日 */
let UTday = message => {
    var dformat = '';
    if (message) {
        var d = new Date(parseInt(message) * 1000);
        dformat =(d.getMonth() + 1) + '月' + d.getDate() + '日';
    }
    return dformat;
}

/* 时间戳 => 月份 */
let filters_m = message => {
    var dformat = '';
    if (message) {
        var d = new Date(parseInt(message) * 1000);
        dformat =(d.getMonth() + 1);
    }
    return dformat;
}

/* 时间戳 => 日 */
let filters_d = message => {
    var dformat = '';
    if (message) {
        var d = new Date(parseInt(message) * 1000);
        dformat =d.getDate();
    }
    return dformat;
}

export { weekday ,UTday,filters_m,filters_d}