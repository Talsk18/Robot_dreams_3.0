document.addEventListener('DOMContentLoaded', function () {

    let arr = new Array(1,2,3);

    Array.prototype.pow = function (n) {
        let array = this;
        let copyArray = new Array();
        for(let i = 0; i < array.length;i++) {
            copyArray[i] = array[i] ** n;
        }
        return copyArray;
    }

    Function.prototype.defer = function(ms) {
        let func = this;
        setTimeout(function() {
            func.apply(null,[ms]);
        },ms);
    }

    function a() {
        alert("test");
    }
    
    a.defer(5000);
 
});