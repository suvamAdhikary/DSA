function maxProfit(prices){

    let myShare = prices[0];

    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++){

        if(myShare < prices[i]){

            maxProfit = Math.max(maxProfit, prices[i] - myShare)

        } else {

            myShare = prices[i];

        }
    }

    return maxProfit;
}

function runProgram(input) {
input = input.trim().split(" ").map(Number);
let res = maxProfit(input)
console.log(res);
}

if (process.env.USERNAME === 'suvamAdhikary') {
  runProgram(`7 6 5 4`);
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