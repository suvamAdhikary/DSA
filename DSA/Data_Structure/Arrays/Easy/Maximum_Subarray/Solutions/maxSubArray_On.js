function maxSubArray(nums){

    let max = -(10**4), sum = 0;

    for(let i = 0; i < nums.length; i++){

        sum += nums[i];

        if(sum > max) {
            max = sum;
        }

        if(sum < 0) {
            sum = 0;
        }

    }
    return max;
}

function runProgram(input) {
input = input.trim().split(" ").map(Number);
let op = maxSubArray(input);
console.log(op);
}

if (process.env.USERNAME === 'suvamAdhikary') {
  runProgram(`5 4 -1 7 8`);
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