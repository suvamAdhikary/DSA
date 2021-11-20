function isValid(weight, n, days, max){

    let day = 1;
    let sum = 0;

    for(let i = 0; i < n; i++) {
        sum += weight[i];

        if(sum > max) {
            day++;
            sum = weight[i];
        }

        if(day > days) return false;
    }
    return true;
}

function shipWithinDays(weight, n, days) {

    let sum = 0;

    for(let i = 0; i < n; i++) {

        sum += weight[i];
    }

    let higest = weight[0];

    for(let i = 1; i < n; i++) {

        higest = Math.max(higest, weight[i]);
    }

    let end = sum;

    let res = -1;

    while (higest <= end) {

        let mid = higest + Math.floor((end - higest) / 2);
        
        if(isValid(weight, n, days, mid)){

            res = mid;
            end = mid - 1;

        } else {

            higest = mid + 1;

        }

    }
    return res;
}


function runProgram(input) {
input = input.trim().split(/[\r\n]+/);
let temp = input[0].trim().split(" ").map(Number);
let len = temp[0];
let days = temp[1];
let num = input[1].trim().split(" ").map(Number);
let op = shipWithinDays(num, len, days);
console.log(op);
}

if (process.env.USERNAME === 'suvamAdhikary') {
  runProgram(`10 5
  1 2 3 4 5 6 7 8 9 10`);
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