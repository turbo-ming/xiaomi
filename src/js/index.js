var prev = document.getElementById("prev");
var next = document.getElementById("next");

var bannerImg = document.querySelector(".banner_img");

var offset = 1200;
var index = 1;
var len = 8;


//焦点功能：焦点切换是通过修改对应元素的className来实现
// 焦点事件
var points = document.getElementsByClassName("points_lis");
//焦点得到后需要先持有当高亮的那个焦点
// 持有最开始高亮的点：最开始是第一个为高亮
var activePoint = points[0];


prev.onclick = function() {
    if (bannerImg.offsetLeft % offset != 0) {
        return;
    }
    if (index == 6) {
        bannerImg.style.transition = "left 0.3s";
    }
    index--;

    // console.log(index);
    if (index < 0) {
        index = 6;
    }
    bannerImg.style.left = -(index * offset) + "px";
    console.log(bannerImg.offsetLeft);
    console.log(index);

    //焦点切换
    if (index <= 5 && index != 0) {

        SwitchPoints(index - 1);
        // console.log(index);
    }
    //如果当前图片处于第一张
    if (index == 0) {
        //当要切换到最后一张图片的时候，需要单独设置一下焦点的显示
        SwitchPoints(points.length - 1);

        setTimeout(function() {
            bannerImg.style.transition = "none";
            bannerImg.style.left = "-7200px";
            index = 6;
            // console.log(index);
            //瞬间跳回自己克隆的照片
        }, 300)
    }

}

next.onclick = function() {
    SwitchImg();
}


//next封装函数
var SwitchImg = function() {
        //为了防止弹回到第一张，需要做一个限制
        //当图片还没有运动完成时，不做任何处理
        if (bannerImg.offsetLeft % offset != 0) {
            return;
        }

        //如果索引小于等于5的时候，调用焦点切换功能
        //索引从0开始，一共有六张图片
        if (index <= 5) {
            // activePoint.className = "points_lis";
            // points[index].className = "points_lis points_lis_active";
            // activePoint = points[index];
            SwitchPoints(index);
            // console.log(index);
        }



        //点击下一张的时候子再index++
        index++;
        // index %= len;
        // console.log(index);

        //重新调用
        if (bannerImg.offsetLeft == -1200) {
            bannerImg.style.transition = "left 0.3s";
        }

        bannerImg.style.left = -(index * offset) + "px";
        // console.log(bannerImg.offsetLeft);



        if (bannerImg.offsetLeft == -7200) {

            SwitchPoints(0);
            // console.log(index);


            setTimeout(function() {
                bannerImg.style.transition = "none";
                bannerImg.style.left = "-1200px";
                index = 1;
                //瞬间弹回自己克隆的照片
                //只调用一次，0.3秒后弹出
            }, 300)

        }
    }
    // next封装完成

// 自动轮播
var timer = setInterval(function() {
    SwitchImg();
}, 2000)

// 设置鼠标事件
var bannerBox = document.getElementById("banner_cont");
// console.log(bannerBox);

//鼠标进入后， 清空自动调用
bannerBox.onmouseenter = function() {
    clearInterval(timer);
}

//鼠标划出事件， 重新调用自动调用
bannerBox.onmouseleave = function() {
    timer = setInterval(function() {
        SwitchImg();
    }, 2000)
}

//焦点功能
// var points = document.getElementsByClassName("points_lis");

for (var i = 0; i < points.length; i++) {

    points[i].idx = i;
    //索引复制
    points[i].onmouseenter = function() {
        SwitchPoints(this.idx)
        idx = this.idx + 1;
        console.log(this.idx);
        bannerImg.style.left = -(idx * offset) + "px";
    }
}

// 封装焦点代码
function SwitchPoints(targetPoints) {
    activePoint.className = "points_lis";
    // 排它，把所有的焦点变为非高亮显示
    points[targetPoints].className = "points_lis points_lis_active";
    //目标元素设为高亮元素
    activePoint = points[targetPoints];

    // console.log(targetPoints);
}


//家电焦点切换
var _span = document.querySelectorAll("#case3_cont>section>p>span");
var showLi = document.querySelectorAll(".right_show>li");
for (var i = 0; i < _span.length; i++) {
    _span[i].idx = i;
    _span[i].onmouseenter = function() {
        console.log(showLi);

        for (var j = 0; j < showLi.length; j++) {
            _span[j].className = "";
            showLi[j].style.display = "none";
        }
        this.className = "active1";
        showLi[this.idx].style.display = "block";
    }
}


//智能切换
var spanLis = document.querySelectorAll("#case4_cont>section>p>span");
var showLis = document.querySelectorAll(".right_list>li");
for (var i = 0; i < spanLis.length; i++) {
    spanLis[i].idx = i;
    spanLis[i].onmouseenter = function() {
        console.log(showLi);

        for (var j = 0; j < showLis.length; j++) {
            spanLis[j].className = "";
            showLis[j].style.display = "none";
        }
        this.className = "active1";
        showLis[this.idx].style.display = "block";
    }
}