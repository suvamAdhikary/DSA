const removeDuplicates = (nums) => {

    let left = 1;
    let right = 1;
    
    while(right < nums.length) {

      if(nums[right] !== nums[right - 1]) {
        nums[left] = nums[right];
        left++;
      }
      right++;

    }

    nums.length = left;

    return nums;
}

function runProgram(input) {
    input = input.trim().split(" ").map(Number);

    const op = removeDuplicates(input);
    
    console.log(op);
    
    }
    
    if (process.env.USERNAME === 'suvamAdhikary') {
      runProgram(`0 0 1 1 1 2 2 3 3 4`);
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