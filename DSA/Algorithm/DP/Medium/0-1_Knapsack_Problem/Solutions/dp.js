let wt = [10, 20, 30];
let val = [60, 100, 120];
let k = 50;

function knapshak0_1(wt, val, k){

    let dp = new Array(wt.length + 1);


    for(let i = 0; i <= wt.length; i++) {

        dp[i] = new Array(k + 1);

        for(let cap = 0; cap <= k; cap++) {

            if(i === 0 || cap ===0){
                dp[i][cap] = 0;

            } else if(cap < wt[i - 1]){

                dp[i][cap] = dp[i - 1][cap];

            } else {
                dp[i][cap] = Math.max(
                    val[i - 1] + dp[i - 1][cap - wt[i - 1]],
                    dp[i - 1][cap]
                )
            }
        }
    }

console.log(dp[wt.length][k]);
return;
}

knapshak0_1(wt, val, k)