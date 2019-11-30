var curIndex = 0;
//时间间隔(单位毫秒)，每秒钟显示一张，数组共有3张图片放在img文件夹下
var timeInterval = 1000;

                        //定义一个存放照片位置的数组，可以放任意个，在这里放3个
var arr = new Array();
arr[0] = "img/1.jpg";
arr[1] = "img/2.jpg";
arr[2] = "img/3.jpg";
arr[3] = "img/4.jpg";
arr[4] = "img/5.jpg";
arr[5] = "img/10.jpg";
setInterval(changeImg, timeInterval);
function changeImg() {
if (curIndex == arr.length - 1) {
curIndex = 0;
} else {
curIndex += 1;
}

                                  //设置body的背景图片
document.body.style.backgroundImage = "URL("+arr[curIndex]+")";  //显示对应的图片
}
