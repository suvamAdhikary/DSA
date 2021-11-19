function twoSum(nums, target){

    for(let i = 0; i < nums.length -1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

function runProgram(input) {
input = input.trim().split(/[\r\n]+/);
const nums = input[0].trim().split(" ").map(Number);
const target = +input[1];
const op = twoSum(nums, target);
console.log(op);
}

if (process.env.USERNAME === 'suvamAdhikary') {
  runProgram(`2 7 11 15
  9`);
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