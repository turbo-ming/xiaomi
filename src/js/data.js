//  家电模块渲染
getList();

function getList() {
    $.ajax({
        url: '../lib/shouji.json',
        dataType: 'json',
        success: function(res) {
            console.log(res);
            //
            let str = '';
            let str2 = '';
            var count = 0;
            res.forEach(item => {
                    count++;
                    if (count <= 4) {
                        str += `
                    <aside>
                    <div class="as_img"><img src=${item.ulr} alt=""></div>
                    <h3>${item.title}</h3>
                    <p class="des">${item.name}</p>
                    <p class="Price">
                        <span>${item.price}</span>元起
                    </p>
                </aside>
                    `
                    } else {
                        str2 += `
                        <aside>
                    <div class="as_img"><img src=${item.ulr} alt=""></div>
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
        }
    })
}

//