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
    }
}