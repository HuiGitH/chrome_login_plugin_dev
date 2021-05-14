(function () {

    function pro() {
        console.log("this is a auto login plugin");
        // $(".expandResource")[0].click();  // 打开
        $(".toggleOperation")[0].click();  // 打开
        $(".authorize__btn_operation")[0].click();  //打开填写token窗口

        const url = window.location.href
        console.log(url)
        url_localhost = url.indexOf('localhost')

        var ajax_url = ""
        if(url_localhost !=-1){
            ajax_url ='http://localhost:8555/v1/user/auth'
        }
        url_index = url.indexOf('192.168.1.32')
        if (url_index != -1){
            ajax_url ='http://192.168.1.32:8555/v1/user/auth'
        }

        $.ajax({
            /* url 地址可以是 /get-json/ 的方式
            *  也可以是 http://www.qfedu.com/get-json/ 的方式
            */
            url: ajax_url,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                "login": "admin",
                "password": "admin"
            }),
            success: function (res) {
                // 成功处理逻辑
                console.log(res.val.items.access_token);
                $(".key_input_container input").on('input', function () {
                    $(".key_input_container input").val(res.val.items.access_token);
                    $(".auth_submit__button").click();

                })
                $(".auth_submit__button").click();

            },
            error: function (res) {
                // 错误时处理逻辑
                console.log('error')
            }
        });
    }

    setTimeout(pro, 3000);
})();