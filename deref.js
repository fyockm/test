function ref(obj, str) {
    return str.split(".").reduce(function(o, x) {
        return o[x]
    }, obj);
}

var x = {
    y: {
        z: { n: 5 }
    }
};

console.log('ref', ref(x, 'y.z.n'));
