function intersect(nums1, nums2){

    let i = 0, j = 0;

    let res = [];

    while(i < nums1.length && j < nums2.length){
        if(nums1[i] === nums2[j]){
            res.push(nums1[i]);
            i++;
            j++;
        } else if(nums1[i] > nums2[j]){
            j++;
        } else {
            i++;
        }
    }
    return res;
}

function runProgram(input) {
input = input.trim().split(/[\r\n]+/);
let n1 = input[0].trim().split(" ").map(Number);
let n2 = input[1].trim().split(" ").map(Number);
n1.sort((a , b) => a - b);
n2.sort((a , b) => a - b);
let op = intersect(n1, n2);
console.log(op);
}

if (process.env.USERNAME === 'suvamAdhikary') {
  runProgram(`4 9 5
  9 4 9 8 4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}