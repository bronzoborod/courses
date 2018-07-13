(function () {

    let userName = prompt("Введите имя");

    var strCamel = function (str) {
            let letterReg = true;
            var newStr="";
            for (let i = 0; i < str.length; i++) {
                if (letterReg) {
                    newStr += str[i].toUpperCase();
                    letterReg = false;
                } else {
                    newStr += str[i].toLowerCase();
                    letterReg = true;
                }
            }
            return newStr;
        },
        strReverse = function (str) {
            return str.split("").reverse().join("");
        },
        checkNumber = function (str) {
            return str.search(/\d/) != -1
        };

    if (checkNumber(userName)) {
        console.log(strCamel(userName));
        // console.log(userName);
    } else {
        console.log(strReverse(userName));
        // console.log(userName);
    }

})();