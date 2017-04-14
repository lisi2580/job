/*!
 * 常用基础库
 *
 * Date: 2017-04-13
 */

var Helper = {
    // 深度拷贝
    deepClone: function () {
        var source = arguments[0] ? arguments[0] : {}, target, copy, tmp, key, clone;
        for (var i = 0, l = arguments.length; i < l; i++) {
            tmp = arguments[i];
            if (tmp != null) {
                for (key in tmp) {
                    target = source[key];
                    copy = tmp[key];

                    if (copy) {
                        if (typeof copy === 'object') {
                            if (copy instanceof Array) {
                                clone = (typeof target === 'object' && target instanceof Array) ? target : [];
                            }
                            else {
                                clone = (target && typeof target === 'object' && !target instanceof Array) ? target : {};
                            }
                            source[key] = this.deepClone(clone, copy);
                        }
                        else {
                            source[key] = copy;
                        }
                    }
                }
            }
        }
        return source;
    },

    ajax: function (opt) {
        var options = {
            url: '',
            method: 'get',
            sync: true,
            dataType: 'json', // ['json', xml, text]
            data: {},
            success: function () {},
            error: function () {}
        }

        this.deepClone(options, opt);

        var xmlhttp;
        if (window.XMLHttpRequest) {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp = new XMLHttpRequest();
        }
        else {
            // IE6, IE5 浏览器执行代码
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }

        var method = options.method.toUpperCase();
        var data = '';
        for (var key in options.data) {
            data += key + '=' + (options.data[key] !== undefined ? options.data[key] : '') + '&';
        }
        if (data.length > 0) {
            data = data.substr(0, data.length - 1);
        }

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState==4){
                if (xmlhttp.status == 200) {
                    var result;
                    if (options.dataType === 'xml') {
                        result = xmlhttp.responseXML;
                    }
                    else {
                        result = xmlhttp.responseText;
                        if (options.dataType === 'json') {
                            result = JSON.parse(result);
                        }
                    }
                    options.success(result);
                }
                else {
                    options.error();
                }
            }
        }

        if (method === 'GET') {
            xmlhttp.open(method, options.url + (data.length > 1 ? (options.url.indexOf('?') > -1 ? '&' : '?') : '') + data, options.sync);
            xmlhttp.send();
        }
        else {
            xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlhttp.send(data);
        }
    }
}