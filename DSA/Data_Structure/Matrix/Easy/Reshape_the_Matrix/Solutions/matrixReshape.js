function matrixReshape(mat, r, c){
    
}

function runProgram(input) {
input = input.trim().split(/[\r\n]+/);
for(let i = 0; i < input.length; i++){
    input[i] = input[i].trim().split(" ").map(Number);
}
let temp = input[0];
let row = temp[0];
let col = temp[1];
let mat = [];
for(let i = 1; i < input.length - 1; i++){
    mat.push(input[i]);
}
let r = input[input.length - 1][0];
let c = input[input.length - 1][1];

}

if (process.env.USERNAME === 'suvamAdhikary') {
  runProgram(`2 2
  1 2
  3 4
  1 4`);
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