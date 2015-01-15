// http://www.netflix.com/Genre?genreId=83&trackingId=abc

// ?a=1&b=2&c=3&a=8

function parse(query) {
    var params = query.split('&');
    var ret = {};
    params.foreach(function(param) {
        var x = param.split('=');
        ret[x[0]] = x[1];
    };
    return ret;
}

function getQueryParam(url, param) {
    var query = url.split('?')[1];
    return parse(query)[param];
}

function removeQueryParam(url, param) {
    var url1 = url.split('?');
    var host = url1[0];
    var query = url1[1];
    var queryObj = parse(query);
    delete queryObj[param];
    var queryStr = ''; 
    Object.keys(queryObj).foreach(function(key) {
        queryStr += key + '&' + queryObj[key];
    };
    return host + '?' + queryStr;
}