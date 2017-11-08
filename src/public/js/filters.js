module.exports = {
    // 验证密码
    validPwd: function(val) {
        var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[\dA-Za-z]{6,}$/;
        var result = val.toString().match(re) ? true : false;
        return result;
    },
    // 验证手机
    validMobile: function(val) {
        var re = /^[1][3,4,5,7,8]\d{9}$/;
        var result = val.toString().match(re) ? true : false;
        return result;
    },
    // 验证身份证
    validIdCard: function(val) {
        var re = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
        var result = val.toString().match(re) ? true : false;
        return result;
    }
}