module.exports = function (optString) {
    optString = optString.toLowerCase();
    let strLength = optString.length;
    if (strLength < 5) {
        return "the string's length is less 5";
    } else {
        let num = [];
        for (let i = 0; i < strLength / 2; i++) {
            num.push(Math.floor(Math.random()*strLength));
        }
        num.forEach(function(v){
            optString = optString.replace(optString[v], optString[v].toUpperCase())
        });
        return optString;
    }
}
