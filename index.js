//FIBONACCI using RECURSION

function fibonacci (n) {
  if (n===0) return 0;
  if (n===1) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}
const output = fibonacci (10);
console.log(output);


//FIBONACCI USING CLOSURE
/*
   let fibonacci2 = (function () {
        var arr = [0, 1];
        return function () {
            var num = arr[arr.length - 1],
                len = arr.length;
            arr.push(arr[len - 1] + arr[len - 2]);
            return num;
        };
    }());

    //test
    var i;
    for (i = 0; i < 10; i++) {
        console.log(fibonacci2());
    }
   //1,1,2,3,5,8,13,21,34,55

   */