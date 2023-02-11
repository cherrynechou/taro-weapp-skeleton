/**
 * 时间
 */
const formatTime = dateTime => {
	
	if (dateTime.toString().length == 10) dateTime *= 1000;
	
	let date = new Date(dateTime);
	
    return {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds(),
		weekday: date.getDay()
	}
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

const formatYMDLocal = function(time){
	var n = formatTime(time);
	return [n.year, n.month, n.day].map(formatNumber).join("/");
}

const formatYMD = function(time){
	var n = formatTime(time);
	return [n.year, n.month, n.day].map(formatNumber).join("-");
}

const formatHMS = function(time){
	var n = formatTime(time);
	return [n.hour, n.minute, n.second].map(formatNumber).join(":");
}

const formatWithoutSecond = function(time){
	var n = formatTime(time);
	return [n.year, n.month, n.day].map(formatNumber).join("-") + " " + [n.hour, n.minute].map(formatNumber).join(":");
}

const formatOnlyHM = function(time){
	var n = formatTime(time);
	return [n.hour, n.minute].map(formatNumber).join(":");
}

const formatFull=function(time){
	var n = formatTime(time);
	return [n.year, n.month, n.day].map(formatNumber).join("-") + " " + [n.hour, n.minute, n.second].map(formatNumber).join(":");
}

const formatMD = function(time){
	var n = formatTime(time);
	return [n.month].map(formatNumber) + "月" + [n.day].map(formatNumber) + "日";
}

const formatYMDPoint = function(time){
	var n = formatTime(time);
	return [n.year, n.month, n.day].map(formatNumber).join(".");
}

const formatYMDHMPoint = function(time){
	var n = formatTime(time);
	return [n.year, n.month, n.day].map(formatNumber).join(".") + " " + [n.hour, n.minute].map(formatNumber).join(":");
}

const formatMDHM = function(time){
	var n = formatTime(time);
	return [n.month].map(formatNumber) + "." + [n.day].map(formatNumber) + " " + [n.hour, n.minute].map(formatNumber).join(":");
}

const formatWeekday = function(time){
	var n = formatTime(time);
	var r="";
	switch (n.weekday) {
		case 0:
			r = "周日";
			break;
		case 1:
			r = "周一";
			break;
		case 2:
			r = "周二";
			break;
		case 3:
			r = "周三";
			break;
		case 4:
			r = "周四";
			break;
		case 5:
			r = "周五";
			break;
		case 6:
			r = "周六";
	}
	return n.weekday = r, n;
}

export default {
	formatNumber,
	formatYMDLocal,
	formatYMD,
	formatHMS,
	formatWithoutSecond,
	formatOnlyHM,
	formatFull,
	formatMD,
	formatYMDPoint,
	formatYMDHMPoint,
	formatMDHM,
	formatWeekday
}