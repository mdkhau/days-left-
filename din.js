var DateDiff = {

    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000));
    },

    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000*7));
    },

    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },

    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

function getBusinessDatesCount(startDate, endDate) {
    var count = 0;
    var curDate = startDate;
    while (curDate <= endDate) {
        var dayOfWeek = curDate.getDay();
        if(!((dayOfWeek == 6) || (dayOfWeek == 0)))
           count++;
        curDate.setDate(curDate.getDate() + 1);
    }
    return count;
}

function difference(){
 

var d1 = new Date(document.getElementById("date1").value);
var d2 = new Date(document.getElementById("date2").value);
document.getElementById('daysleft').innerHTML=DateDiff.inDays(d1, d2);
document.getElementById('bdays').innerHTML=getBusinessDatesCount(d1, d2);
//document.get("<br />Number of <b>days</b> since "+d1+": //"+);
//document.write("<br />Number of <b>weeks</b> since "+d1+": //"+DateDiff.inWeeks(d1, d2));
//document.write("<br />Number of <b>months</b> since "+d1+": //"+DateDiff.inMonths(d1, d2));
//document.write("<br />Number of <b>years</b> since "+d1+": //"+DateDiff.inYears(d1, d2));
}