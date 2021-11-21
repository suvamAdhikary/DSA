function containDuplicate(nums) {

    nums.sort((a, b) => a - b);

    let i = 1;

    while(i < nums.length) {

        if(nums[i] === nums[i - 1]) return true;

        i++;

    }

    return false;

}

function runProgram(input) {
input = input.trim().split(" ").map(Number);
let op = containDuplicate(input)
console.log(op);
}

if (process.env.USERNAME === 'suvamAdhikary') {
  runProgram(`2 3 1`);
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