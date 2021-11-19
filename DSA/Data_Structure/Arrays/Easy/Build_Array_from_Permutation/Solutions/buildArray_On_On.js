function buildArray(nums) {
    let res = [];

    for(let i = 0; i < nums.length; i++) {
        res.push(nums[nums[i]]);
    }

    return res;
}

function runProgram(input) {
input = input.trim().split(" ").map(Number);

let op = buildArray(input);

console.log(op);

}

if (process.env.USERNAME === 'suvamAdhikary') {
  runProgram(`0 2 1 5 3 4`);
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