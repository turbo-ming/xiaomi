//  手机模块渲染
let arr = [];
getPhone();

function getPhone() {
    $.ajax({
        url: '../lib/phone.json',
        dataType: 'json',
        success: function(res) {
            // console.log(res);
            //
            let str = '';
            let str2 = '';
            var count = 0;
            res.forEach(item => {
                    count++;
                    if (count <= 4) {
                        str += `
                    <aside class="list" data-id="${item.id}">
                    <div class="as_img"><img src=${item.url} alt=""></div>
                    <h3>${item.title}</h3>
                    <p class="des">${item.name}</p>
                    <p class="Price">
                        <span>${item.price}</span>元起
                    </p>
                </aside>
                    `
                    } else {
                        str2 += `
                        <aside class="list" data-id="${item.id}">
                    <div class="as_img"><img src=${item.url} alt=""></div>
                    <h3>${item.title}</h3>
                    <p class="des">${item.name}</p>
                    <p class="Price">
                        <span>${item.price}</span>元起
                        <del>
                        <span>${item.del}</span>元
                    </del>
                    </p>
                </aside>
                        `
                    }
                })
                //填充
            $('#cp-list_1').html(str);
            $('#cp-list_2').html(str2);


            // 点击跳转详情页
            $('.cp-list > section').on('click', 'aside', function() {
                // this 就是你点击的那一个 li
                // console.log(this)
                // 找到渲染这个 li 的数据
                // 从 list 数组里面找到这个数据
                // 点击 li 的时候, 拿到自己身上的 id 属性
                const id = $(this).data('id')

                // 2. 去到 list 这个数组里面找到一个 id 对应的数据
                //   这个数据就是渲染这个 li 的数据
                var list = document.querySelectorAll(".list");
                let data = null
                for (let i = 0; i < list.length; i++) {
                    if (res[i].id === id) {
                        data = res[i]
                        break
                    }
                }
                console.log(data);

                // 3. 把找到的数据存储到 localStorage 里面
                //   为了详情页面使用
                localStorage.setItem('goodsInfo', JSON.stringify(data))

                // 4. 跳转页面
                window.location.href = "xiangqingye.html?id=" + id;
            })
        }
    })
}

//家电渲染
getJiaDian();

function getJiaDian() {
    $.ajax({
        url: '../lib/jiadian.json',
        dataType: 'json',
        success: function(res) {
            // console.log(res);

            var index = 0;
            let str3 = '';
            let str4 = '';
            let str5 = '';
            let str6 = '';
            res.forEach(items => {
                    index++;

                    if (index <= 4) {
                        str3 += `
            <aside>
                            <div class="as_img"><img src=${items.ulr} alt=""></div>
                            <h3>${items.title}</h3>
                            <p class="des">${items.name}</p>
                            <p class="Price">
                                <span>${items.price}</span>元起
                                <del>
                                <span>${items.del}</span>元
                            </del>
                            </p>
                        </aside>
            `
                    } else if (index > 4 && index <= 7) {
                        str4 += `
                        <aside>
                            <div class="as_img"><img src=${items.ulr} alt=""></div>
                            <h3>${items.title}</h3>
                            <p class="des">${items.name}</p>
                            <p class="Price">
                                <span>${items.price}</span>元起
                                <del>
                                <span>${items.del}</span>元
                            </del>
                            </p>
                        </aside>
                        `
                    } else if (index > 7 && index <= 11) {
                        str5 += `
                        <aside>
                            <div class="as_img"><img src=${items.ulr} alt=""></div>
                            <h3>${items.title}</h3>
                            <p class="des">${items.name}</p>
                            <p class="Price">
                                <span>${items.price}</span>元起
                                <del>
                                <span>${items.del}</span>元
                            </del>
                            </p>
                        </aside>
                        `
                    } else {
                        str6 += `
                        <aside>
                            <div class="as_img"><img src=${items.ulr} alt=""></div>
                            <h3>${items.title}</h3>
                            <p class="des">${items.name}</p>
                            <p class="Price">
                                <span>${items.price}</span>元起
                                <del>
                                <span>${items.del}</span>元
                            </del>
                            </p>
                        </aside>
                        `
                    }
                })
                //填充
            $('#cp_list_one').html(str3);
            $('#cp_list_two').html(str4);
            $('#cp_list_three').html(str5);
            $('#cp_list_four').html(str6);



        }
    })
}