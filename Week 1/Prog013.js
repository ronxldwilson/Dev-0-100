// This is an example of Asynchronus execution in which the main thread is not blocked and the execution continues on

function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
}
  
function findSumTill100() {
    console.log("Test");
    console.log(findSum(100));
}

setTimeout(findSumTill100,1000);

console.log("hello world");
