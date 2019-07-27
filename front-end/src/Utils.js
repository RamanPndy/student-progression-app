const Utils  = {

SETCOOKIE :  function (key, value) {
    document.cookie = key + "=" + value + "; path=/";
},

GETCOOKIE : function (key) {
    console.log('get cookie value for key : ' + key)
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
        cookie[k.trim()] = v;
    })
    return cookie[key];
    },

DELETECOOKIE : function (key) {
        document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}

export default Utils;