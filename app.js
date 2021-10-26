window.onbeforeunload = function(e) {
    document.cookie = 'cookiename=; expires=' + d.toGMTString() + ';';
};

