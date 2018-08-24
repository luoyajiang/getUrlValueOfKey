;(function($,window,document,undefined){
    var _global;

    var GetUrlValueOfKey = {
        get: function(variable){
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){ return pair[1]; }
            }
            return(false);
        }
    };

    _global = (function(){ return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = GetUrlValueOfKey;
    } else if (typeof define === "function" && define.amd) {
        define(function(){return GetUrlValueOfKey;});
    } else {
        !('GetUrlValueOfKey' in _global) && (_global.GetUrlValueOfKey = GetUrlValueOfKey);
    }
})(jQuery,window,document);